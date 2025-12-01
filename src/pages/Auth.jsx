import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Input from '@mui/material/Input';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 400 },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 3
};

const BasicModal = React.forwardRef(function BasicModal(props, ref) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const [user,setUser] = React.useState();
   
    const handleClose = () => setOpen(false);
    

    React.useImperativeHandle(ref, () => ({
        open: () => setOpen(true),
        close: () => setOpen(false),
        toggle: () => setOpen((o) => !o),
    }));


    const handleGoogleSuccess = (credentialResponse) => {
        const cred = credentialResponse?.credential;
        if (!cred) {
            console.warn('No credential returned from Google');
            return;
        }
        const profile = jwtDecode(cred);
        setUser(profile)
       
        try { localStorage.setItem('google_user', JSON.stringify(profile)); } catch (e) { /* ignore */ }
        setOpen(false);
    };
    React.useEffect (()=>{
         console.log('Google user decoded:', user);
    },[user])

    const handleGoogleError = (err) => {
        console.error('Google Sign In Failed', err);
    };

    return (
        <div>
            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '0px 8px' }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontSize: '16px', fontFamily: 'Roboto,sans-serif', fontWeight: 'bold' }} >
                            Get Started
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            sx={{ border: '1px solid black', p: 2, mt: 2, borderRadius: 2, display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', position: 'relative' }}
                            role="button"
                            tabIndex={0}
                        >
                            <Box sx={{ position: 'absolute', inset: 0, opacity: 0, zIndex: 2, padding: '12px 0px' }}>
                                <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
                            </Box>
                            <img className="XNo5Ab" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA7VBMVEVHcEz/RkL/R0D+SEr/RUD/RkOwjlb/SD7/SE3/SUj/Vzb/VDf9TFb8TVeHoFb/YTD/byn8TVn/jRr/fSL/mxL/SEj+yQn/ohH/tQv+VUb/vQn/wwn+zgj9wQm3xQ39zgT6zQYwhv/7zgowhv8uhv0ek+Avhv7yzAPjywIvhv0whv7PyQHUygIth/y3yAEnivSlxwGSxgUak94fj+h5xAlgwxMLqp8NnsQVlte6xwBNwh45wC0xwDMLt28IrJgJpa0kjPCaxQEpvzsevkkWvVANumQQu18JtXkIsIgTvVYOvGALuWtJwh4OvF8OvF9ccfxCAAAAT3RSTlMAUZvT7P8T//+wiv//kAv6/mD//+V2jv//JKf//0EmxOr/rP7+MEX//x10/6eu//3+/9v///7I//+K//+KS/3/YeX//7dsnv7/////5s3tMAqBMAAAAXFJREFUeAF0jUUCwCAMwDp3d/f9/4krnVt6goQCFzheECVJFHgOPpB5RZHYIKqqyU+vGwpCXkVM07pp2zEQ8hSYiCBf1rsuFrQCvaSahHe+9wMqWHJuOD2E/lYoWsRxkUbBxcdJshY6bEQ3L6fpWmTnXXbxkBcpJTb8UBZFgUX156uyLLHI4Y+YgqL+DZqS0R7n7o4NLQX9GQwbI5tugpKI7wF5Rjd/BiNCCQZfX5BfCwyWrsnagGEYiKKpMkLqgJmZmXn/caKTzGoM7+v4IEiWPQdJ4fMhFujHCzjH7Wny6xFwMB9UKBa4KN3Tl4kh9AZYVJRbpXhVVRGX0asEXNP1a7MM0wQJA+0WFcQtyz7bcFzPAwn+8AkPwmjDcZK6WJGR75zwsCirOo7rpu0SojC2oQUeIF72/TCMY4sUKSj2wX9iXgAHwYgEoKBPizOBgx4EhwnCtxOtDnYTzn1Gnw3wzYQT3zDJrpmXYVjmpj7d/gPknlJE6eZSewAAAABJRU5ErkJggg==" style={{height:'18px',width:'18px'}} alt="" data-csiid="qnItafStBu3vseMPk9DZGQ_2" data-atf="1"></img>
                            <Typography sx={{px:9}}>Continue with Google</Typography>

                        </Box>
                        <Box sx={{ border: '1px solid black', p: 2, mt: 3, borderRadius: 2, display: 'flex' }}>
                            
                            <EmailOutlinedIcon/>
                            <Typography sx={{px:9}}>Continue with Email</Typography>
                        </Box>
                        <Box sx={{ border: '1px solid black', p: 2, mt: 3, borderRadius: 2, display: 'flex' }}>
                            <AppleIcon />
                            <Typography sx={{px:9}}>Continue with Apple</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Typography>OR</Typography>
                    </Box>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1 }, display: 'flex', justifyContent: 'center', padding: '24px 0px 20px' }}
                        noValidate
                        autoComplete="off"
                    >
                        <Box sx={{display:'flex'}}>
                            <img class="XNo5Ab" src="https://deshpee.com/wp-content/uploads/2022/04/blog_img_2021-05-03_10-20-42_SqzeANX78UfZhd4E.jpg" style={{height:'14px',width:'18px'}} alt="" data-csiid="qnItafStBu3vseMPk9DZGQ_2" data-atf="1"></img> 
                            <Typography>+ 91</Typography>
                        </Box>

                        <Input placeholder="Cointinue with mobile number" />
                    </Box>
                    <Box sx={{ mt: 7, display: 'flex', justifyContent: 'center', padding: '24px 0px' }}>
                        <Typography variant='p'>
                            i agree to the <a href="https://in.bookmyshow.com/terms-and-conditions" target='blank'>Terms & Conditions </a> & <a href="https://in.bookmyshow.com/privacy" target='blank'>Privacy Policy</a>
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
});

export default BasicModal;
