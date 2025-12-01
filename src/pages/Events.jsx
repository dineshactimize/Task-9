import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';


 const handlePayment = async () => {
   
      const options = {
        key: "rzp_test_Rl9SLwtladWoZT",  
        amount: 1999*100,
        currency: 'INR',
        name: "Movie Ticket Booking",
        description: `Booking for Satrangi Re`,
        // order_id: data.id,
        handler: function (response) {
          alert("Payment Successful!");
          console.log("Payment Response:", response);
        },
        prefill: {
          name: "Dinesh",
          email: "dinesh@example.com",
          contact: "7777777777",
        },
        theme: {
          color: "#8B5CF6",
        },
      };
       const rzp1 = new window.Razorpay(options);
                    rzp1.on("payment.failed", function (response) {
                        console.log("Payment failed", response.error);
                        alert("Payment failed. Please try again.");
                    });
                    rzp1.open();
  }

const Events = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Container>
        <Box>
          <Box>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
              Satrangi Re by Sonu Nigam-Hyderabad
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', mt: 4, gap: 2, alignItems: 'flex-start' }}>

            <Box sx={{ width: { xs: '100%', md: '65%' }, display: 'flex', justifyContent: 'center' }}>
              <img src="https://res.cloudinary.com/doaaeqnk2/image/upload/v1764324214/media-desktop-satrangi-re-by-sonu-nigam-hyderabad-0-2025-11-20-t-7-22-41_g5xuhn.avif" alt="" style={{ width: '100%', maxWidth: 900, height: 'auto', borderRadius: 20 }} />
            </Box>
            <Box sx={{ border: '1px solid lightgrey', borderRadius: 4, width: { xs: '90%', lg: 360 }, p: 2, justifyContent:"center",m:'auto' }}>
              <Box sx={{ display: 'flex', height: 36, width: '100%', textAlign: 'center', alignItems: 'center' }}>
                <img src="https://assets-in.bmscdn.com/nmcms/synopsis/calendar.png" alt="" style={{ width: 20, height: 20, margin: 2 }} ></img>
                <Typography>Sat 29 Nov 2025</Typography>
              </Box >
              <Box sx={{ display: 'flex', height: 36, width: '100%', textAlign: 'center', alignItems: 'center' }}>
                <img src="https://assets-in.bmscdn.com/nmcms/synopsis/time.png" alt="" style={{ width: 20, height: 20, margin: 2 }}  ></img>
                <Typography>7:30 PM</Typography>
              </Box>
              <Box sx={{ display: 'flex', height: 36, width: '100%', textAlign: 'center', alignItems: 'center' }}>
                <img src="https://assets-in.bmscdn.com/nmcms/synopsis/duration.png" alt="" style={{ width: 20, height: 20, margin: 2 }} ></img>
                <Typography>2 hours 30 minutes</Typography>
              </Box>
              <Box sx={{ display: 'flex', height: 36, width: '100%', textAlign: 'center', alignItems: 'center' }}>
                <img src="https://assets-in.bmscdn.com/nmcms/synopsis/key_info/age_limit.png" alt="" style={{ width: 20, height: 20, margin: 2 }}  ></img>
                <Typography>Age Limit - 5yrs +</Typography>
              </Box>
              <Box sx={{ display: 'flex', height: 36, width: '100%', textAlign: 'center', alignItems: 'center' }} >
                <img src="https://assets-in.bmscdn.com/nmcms/synopsis/language.png" alt="" style={{ width: 20, height: 20, margin: 2 }}  ></img>
                <Typography>Hindi</Typography>
              </Box>
              <Box sx={{ display: 'flex', height: 36, width: '100%', textAlign: 'center', alignItems: 'center' }}>
                <img src="https://assets-in.bmscdn.com/nmcms/synopsis/genre.png" alt="" style={{ width: 20, height: 20, margin: 2 }}  ></img>
                <Typography>Bollywood</Typography>
              </Box>
              <Box sx={{ display: 'flex', height: 36, width: '100%', textAlign: 'center', alignItems: 'center' }}>
                <img src="https://assets-in.bmscdn.com/nmcms/synopsis/location.png" alt="" style={{ width: 20, height: 20, margin: 2 }}  ></img>
                <Typography>The League:<NearMeOutlinedIcon />Hyderbad</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, bgcolor: '#FFF9EB', mt: 1, borderTop: '1px Solid Black', pt: 1 }}>
                <img src="https://assets-in.bmscdn.com/nmcms/synopsis/info.png" alt="" style={{ height: 16, width: 16 }}></img>
                <Typography>Bookings are filling fast for hyderabad</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 2, gap: 2, alignItems: 'center' }}>
                <Box sx={{ display: 'grid' }} >
                  <Typography>₹999 Onwards</Typography>
                  <Typography sx={{ color: '#F3993E', fontWeight: 'bold' }}>Filling Fast</Typography>
                </Box>
                <Box sx={{ width: { xs: '40%', md: 'auto' } }}>
                  <Button variant='contained' sx={{ fontWeight: 'bold', borderRadius: 2, bgcolor: '#EB4E62', width: { xs: '100%', md: 'auto' } }} onClick={handlePayment}>Book Now</Button>
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
