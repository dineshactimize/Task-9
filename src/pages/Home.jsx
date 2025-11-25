import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/free-mode';
import { getProductDataActionInitiate } from '../redux/actions/getDataAction';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function Home() {
  const[products,setProducts]=useState([])
  const dispatch = useDispatch();
    useEffect(()=>{
     dispatch(getProductDataActionInitiate());
     },[dispatch])

  // Read redux slice defensively. The reducer stores an object { data: [], loading, error }
  const productSlice = useSelector((state) => state.getproductdata || {});
  const dataArray = Array.isArray(productSlice.data) ? productSlice.data : [];

  // useEffect(()=> {
  //   if (getproductdata){
  //     setProducts(getproductdata)
  //   }
  // },[getproductdata]);
  const firstItem = dataArray[0] || {};
  const events = firstItem.Events || [];
  const music = firstItem.Music || [];
  const movies = firstItem['Recommended Movies'] || [];
  const premieres = firstItem.premieres || [];
  console.log('2',events)

  console.log('getproductdataaaaaaaa',getproductdata)

  return (
    <>
    
      <Swiper 
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
       
      >
       
        <SwiperSlide >
          <img src="https://res.cloudinary.com/doaaeqnk2/image/upload/v1763724526/1760430005960_popccweb_uhrlbp.avif" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/doaaeqnk2/image/upload/v1763724526/1763640698741_ariellaweb_sieteo.avif" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/doaaeqnk2/image/upload/v1763724526/1761907921032_amusementparkdesktop_oat006.avif" alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/doaaeqnk2/image/upload/v1763724526/1763188137924_linkinparkwebnew_onk2gg.avif" alt="image" />
        </SwiperSlide>
      
      </Swiper>
        <Container sx={{ mt: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant='h4'>Recommended Movies</Typography>
          </Box>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            breakpoints={{
              1400: { slidesPerView: 4 },
              1100: { slidesPerView: 3 },
              800: { slidesPerView: 3 },
              500: { slidesPerView: 1 }
            }}
          >
            {movies?.map((itemm, index) => (
              <SwiperSlide key={index}>
                <Card sx={{ width: 255, borderRadius: 4, overflow: 'hidden',my:4}} elevation={3}>
                  <img
                    src={itemm.img}
                    alt={itemm.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <CardContent sx={{ py: 1 }}>
                    <Typography variant="subtitle1" noWrap>{itemm.title}</Typography>
                    <Typography variant="caption" color="text.secondary">{itemm.Gerne}</Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
{/* <div style={{padding:'48px 0px', height:199.33, width:1536}}>
    <img src="https://res.cloudinary.com/doaaeqnk2/image/upload/v1763725523/stream-leadin-web-collection-202210241242_v2jpzi.avif" alt="" style={{ width: 1240, height: 103.33, objectFit: 'cover',   }}/>

</div> */}
<Box>
  <Box sx={{my:' 40px',mx:16}}>
        <img src="https://res.cloudinary.com/doaaeqnk2/image/upload/v1763725523/stream-leadin-web-collection-202210241242_v2jpzi.avif" alt="" style={{ width: 1240, height: 103.33, objectFit: 'cover',   }}/>

  </Box>
</Box>

      <Container sx={{ mt: 6 }}>
        <Typography variant='h4' sx={{ mb: 2 }}>The best of Live events</Typography>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            1400: { slidesPerView: 4 },
            1100: { slidesPerView: 3 },
            800: { slidesPerView: 2 },
            500: { slidesPerView: 1 }
           
          }}
        >
          {events?.map((itemm, index) => (
            <SwiperSlide key={index}>
              <Card sx={{ width: 222.4,height:222.4, borderRadius: 4, overflow: 'hidden',my:4 }} elevation={2}>
                <img src={itemm.img} alt={itemm.title || 'event'} style={{ width: 222.4, height: 222.4, objectFit: 'cover' }} />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>


      <Box>
        <Box>

        </Box>
        <Box>
         {premieres?.map((itemm) => (
              <Card sx={{ width: 255, height: 513.95, borderRadius: 4, overflow: 'hidden',my:4 }} elevation={2}>
                <img src={itemm.img} alt={itemm.title || 'music'} style={{ width: 255, height: 414, objectFit: 'cover' }} />
                <CardContent sx={{ py: 2 }}>
                  <Typography variant="subtitle2" noWrap>{itemm.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{itemm.Subtitle}</Typography>
                </CardContent>
              </Card> 
          ))}
        </Box>
      </Box>
      

      <Container sx={{ mt: 6, mb: 6 }}>
        <Typography variant='h4' sx={{ mb: 2 }}>Your Music Studio</Typography>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            1400: { slidesPerView: 4 },
            1100: { slidesPerView: 3 },
            800: { slidesPerView: 2 },
            500: { slidesPerView: 1 }
          }}
        >
          {music?.map((itemm, index) => (
            <SwiperSlide key={index}>
              <Card sx={{ width: 255, height: 513.95, borderRadius: 4, overflow: 'hidden',my:4 }} elevation={2}>
                <img src={itemm.img} alt={itemm.title || 'music'} style={{ width: 255, height: 414, objectFit: 'cover' }} />
                <CardContent sx={{ py: 2 }}>
                  <Typography variant="subtitle2" noWrap>{itemm.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{itemm.Subtitle}</Typography>
                </CardContent>
              </Card>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}
