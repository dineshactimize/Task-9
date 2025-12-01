import React, { useEffect } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { getProductDataActionInitiate } from '../redux/actions/getDataAction';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button,Stack, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import StarIcon from '@mui/icons-material/Star';
import { useParams } from 'react-router';


const Movies = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDataActionInitiate());
  }, [dispatch])

  const getproductdata = useSelector((state) => state.getproductdata);
  const d = getproductdata.data;

  const idd = Object.keys(d)[0];
  const movies = d[idd]?.['Recommended Movies'] || [];
  console.log('jjidsfhuygffuuWHF', movies)
  const movie = movies.find((temp) => (temp.title === id)) || []
  console.log('dafhaiugf', movie) 
 
 const handlePayment = async () => {
   
      const options = {
        key: "rzp_test_Rl9SLwtladWoZT",  
        amount: 125*100,
        currency: 'INR',
        name: "Movie Ticket Booking",
        description: `Booking for ${movie.title}`,
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
          color: "#ee4646ff",
        },
      };
       const rzp1 = new window.Razorpay(options);
                    rzp1.on("payment.failed", function (response) {
                        console.log("Payment failed", response.error);
                        alert("Payment failed. Please try again.");
                    });
                    rzp1.open();
  }

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <div>


      <Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: 'auto', backgroundImage: `linear-gradient(90deg,rgba(26, 26, 26, 1) 25%,rgba(26, 26, 26, 1) 40%,rgba(26, 26, 26, 0.04) 97%),url(${movie.bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: 2, p: 3, color: "#fff", gap: 2, alignItems: 'center' }}>
          <Box sx={{ width: { xs: '100%', md: 300 }, flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
            <img src={movie.vi} alt="" style={{ width: '100%', height: 'auto', borderRadius: 6, objectFit: 'cover' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight={700} sx={{ color: 'white' }}>
              {movie.title}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1} mt={1} sx={{ color: 'white' }}>
              <Typography variant="body1">
                <IconButton sx={{ color: "#d66666ff" }}>
                  <StarIcon />
                </IconButton>
                {movie.ratting}</Typography>
              <Typography variant="body2" color="white">
                {movie.votes}
              </Typography>
            </Stack>

            <Typography mt={2} variant="body2" sx={{ color: 'white' }}>
              {movie.dur}
            </Typography>


            <Stack direction="row" spacing={1} mt={1}>
              <Box sx={{ px: 1.3, py: 0.5, borderRadius: 1, bgcolor: "#333", fontSize: 12, color: 'white' }}>
                {movie.type}
              </Box>

              <Box sx={{ px: 1.3, py: 0.5, borderRadius: 1, bgcolor: "#333", fontSize: 12, color: 'white' }}>
                {movie.lan}
              </Box>
            </Stack>


            <Stack direction={{ xs: 'column', sm: 'row' }} mt={3} spacing={1} alignItems="center">
              <Button size='small' variant="contained" color="error" sx={{ width: { xs: '100%', sm: 214 }, height: 48, padding: '12px 8px' }} onClick={handlePayment}>
                Book Tickets
              </Button>

              <IconButton sx={{ color: "#fff" }}>
                <ShareIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Container>
        <Box>
          <Box >
            <Typography variant='h4' sx={{ pb: 2, fontWeight: "bold",mt:5 }}>
              About the movie
            </Typography>
            <Typography sx={{ maxWidth: '100%' }}>
              Raju Weds Rambai is inspired by a real story of a carefree band drummer whose love for a compounders daughter triggers a clash of ego and honour, turning their sweet village romance into an emotional journey filled with conflict, pain, and ultimately redemption.
            </Typography>
          </Box>

          <Box>
            <Typography variant='h4' sx={{pt:5}} fontWeight={"bold"}>
              Top Offer For You
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mt: 2 }}>
              <Box sx={{ width: { xs: 'auto', md: 444 }, minHeight: 84, bgcolor: '#FFF1CC', padding: '12px 16px', borderRadius: 2, border: '2px dashed #E6C200' }}>
                <Typography>
                  Yes Bank Credit Card holders get 15% off (up to ₹150) on movie tickets, valid on weekdays (Mon - Thu). T&C apply.
                </Typography>
              </Box>
              <Box sx={{ width: { xs: 'auto', md: 444 }, minHeight: 84, bgcolor: '#FFF1CC', padding: '12px 16px', borderRadius: 2, border: '2px dashed #E6C200' }}>
                <Typography>
                  Yes Bank Credit Card holders get 15% off (up to ₹150) on movie tickets, valid on weekdays (Mon - Thu). T&C apply.
                </Typography>
              </Box>
            </Box>
          </Box>

           <Typography sx={{pt:5}} variant='h4'>Cast</Typography>
           <Box sx={{display:'flex',justifyContent:'center',flexWrap:'wrap',p: { xs:2, md:5 }, gap:2}}>
           
            <Box sx={{p:1,textAlign:'center'}}>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/akhil-raj-uddemari-2052611-1763441589.jpg" alt="" style={{width:120,maxWidth:120,height:'auto',borderRadius:5}} />
              <p>Akhil Raj Uddemari</p>
              <p>Actor  </p>
            </Box>
            <Box sx={{p:1,textAlign:'center'}}>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tejaswi-rao-2039103-1763441632.jpg" alt="" style={{width:120,maxWidth:120,height:'auto',borderRadius:5}} />
              <p>Tejaswi Rao</p>
              <p>Actor  </p>
            </Box>
            <Box sx={{p:1,textAlign:'center'}}>
              <img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/chaitu-jonnalagadda-2032892-1763441665.jpg" alt="" style={{width:120,maxWidth:120,height:'auto',borderRadius:5}} />
              <p>Chaitu Jonnalagadda</p>
              <p>Actor  </p>
            </Box>
           </Box>
        </Box>
      </Container>



    </div>
  )
}

export default Movies
