import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EmailIcon from '@mui/icons-material/Email';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Input from '@mui/material/Input';

// const ariaLabel = { 'aria-label': 'description' };
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 3
};

const BasicModal = React.forwardRef(function BasicModal(props, ref) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useImperativeHandle(ref, () => ({
        open: () => setOpen(true),
        close: () => setOpen(false),
        toggle: () => setOpen((o) => !o),
    }));

    // Using `jwt-decode` package instead of a custom decoder

    const handleGoogleSuccess = (credentialResponse) => {
        const cred = credentialResponse?.credential;
        if (!cred) {
            console.warn('No credential returned from Google');
            return;
        }
        const user = jwtDecode(cred);
        console.log('Google user decoded:', user);
        try { localStorage.setItem('google_user', JSON.stringify(user)); } catch (e) { /* ignore */ }
        setOpen(false);
    };

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
                    <Box sx={{ display: 'flex', justifyContent: 'center' ,padding:'0px 8px'}}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontSize:'16px',fontFamily:'Roboto,sans-serif',fontWeight:'bold'}} >
                            Get Started
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            sx={{ border: '1px solid black', p: 2, mt: 2, borderRadius: 2, display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', position: 'relative' }}
                            role="button"
                            tabIndex={0}
                        >
                            {/* Hidden GoogleLogin covers the entire box so clicking the box triggers Google auth */}
                            <Box sx={{ position: 'absolute', inset: 0, opacity: 0, zIndex: 2,padding:'12px 0px' }}>
                                <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
                            </Box>

                            <GoogleIcon />
                            <Typography>Continue with Google</Typography>

                        </Box>
                        <Box sx={{ border: '1px solid black', p: 2, mt: 3, borderRadius: 2, display: 'flex' }}>
                            <EmailIcon />
                            <Typography>Continue with Email</Typography>
                        </Box>
                        <Box sx={{ border: '1px solid black', p: 2, mt: 3, borderRadius: 2, display: 'flex' }}>
                            <AppleIcon />
                            <Typography>Continue with Apple</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center',mt:2 }}>
                        <Typography>OR</Typography>
                    </Box>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1 } ,display:'flex',justifyContent:'center',padding:'24px 0px 20px'}}
                        noValidate
                        autoComplete="off"
                    >
                        <Box>
                               🇮🇳 +91
                        </Box>
                    
                       <Input    placeholder="Cointinue with mobile number"  />
                    </Box>
                    <Box sx={{mt:7,display:'flex',justifyContent:'center',padding:'24px 0px'}}>
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
