import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';

const Events = () => {
  return (
    <div>
        <Container>
      <Box>
        <Box>
           <Typography variant='h4'sx={{fontWeight:'bold'}}>
             Satrangi Re by Sonu Nigam-Hyderabad
           </Typography>
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',mt:4}}>

        <Box >
            <img src="https://res.cloudinary.com/doaaeqnk2/image/upload/v1764324214/media-desktop-satrangi-re-by-sonu-nigam-hyderabad-0-2025-11-20-t-7-22-41_g5xuhn.avif" alt="" style={{width:843.2,height:421.6,borderRadius:20}} />
        </Box>
        <Box sx={{border:'2px solid black',borderRadius:4,ml:5,height:350,width:359.6,p:2}}>
        <Box sx={{display:'flex',height:36,width:318,textAlign:'center'}}>
            <img src="https://assets-in.bmscdn.com/nmcms/synopsis/calendar.png" alt="" style={{width:20,height:20,margin:2}} ></img>
            <Typography>Sat 29 Nov 2025</Typography>
        </Box >
        <Box sx={{display:'flex',height:36,width:318,textAlign:'center'}}>
            <img src="https://assets-in.bmscdn.com/nmcms/synopsis/time.png" alt="" style={{width:20,height:20,margin:2}}  ></img>
            <Typography>7:30 PM</Typography>
        </Box>
        <Box sx={{display:'flex',height:36,width:318,textAlign:'center'}}>
            <img src="https://assets-in.bmscdn.com/nmcms/synopsis/duration.png" alt=""  style={{width:20,height:20,margin:2}} ></img>
            <Typography>2 hours 30 minutes</Typography>
        </Box>
        <Box sx={{display:'flex',height:36,width:318,textAlign:'center'}}>
            <img src="https://assets-in.bmscdn.com/nmcms/synopsis/key_info/age_limit.png" alt="" style={{width:20,height:20,margin:2}}  ></img>
            <Typography>Age Limit - 5yrs +</Typography>
        </Box>
        <Box sx={{display:'flex',height:36,width:318,textAlign:'center'}} >
            <img src="https://assets-in.bmscdn.com/nmcms/synopsis/language.png" alt="" style={{width:20,height:20,margin:2}}  ></img>
            <Typography>Hindi</Typography>
        </Box>
        <Box sx={{display:'flex',height:36,width:318,textAlign:'center'}}>
            <img src="https://assets-in.bmscdn.com/nmcms/synopsis/genre.png" alt="" style={{width:20,height:20,margin:2}}  ></img>
            <Typography>Bollywood</Typography>
        </Box>
        <Box sx={{display:'flex',height:36,width:318,textAlign:'center'}}>
            <img src="https://assets-in.bmscdn.com/nmcms/synopsis/location.png" alt="" style={{width:20,height:20,margin:2}}  ></img>
            <Typography>The League:<NearMeOutlinedIcon/>Hyderbad</Typography>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',gap:2,bgcolor:'#FFF9EB',mt:1,borderTop:'1px Solid Black',pt:1}}>
            <img src="https://assets-in.bmscdn.com/nmcms/synopsis/info.png" alt="" style={{height:16,width:16}}></img>
            <Typography>Bokkings are filling fast for hyderabad</Typography>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between',m:2}}>
            <Box sx={{display:'grid'}} >
                <Typography>₹999 Onwards</Typography>
                 <Typography sx={{color:'#F3993E',fontWeight:'bold'}}>Filling Fast</Typography>
            </Box>
              <Box>
                <Button variant='contained' sx={{fontWeight:'bold',borderRadius:2,bgcolor:'#EB4E62'}}>Book Now</Button>
              </Box>
            
        </Box>
        </Box>
        
        </Box>
      </Box>
        </Container>
    </div>
  )
}

export default Events
