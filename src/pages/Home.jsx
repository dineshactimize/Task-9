import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { getProductDataActionInitiate } from '../redux/actions/getDataAction';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router';


export default function Home() {
  const swiperBreakpoints = {
    0: { slidesPerView: 1, centeredSlides: true },
    600: { slidesPerView: 2, centeredSlides: false },
    900: { slidesPerView: 3, centeredSlides: false },
    1200: { slidesPerView: 4, centeredSlides: false }
  };

  const commonSwiperProps = {
    spaceBetween: 16,
    freeMode: false,
    pagination: { clickable: true },
    navigation: true,
    modules: [FreeMode, Pagination, Navigation],
    className: 'mySwiper',
    breakpoints: swiperBreakpoints
  };

  const heroSwiperProps = {
    ...commonSwiperProps,
    breakpoints: { 0: { slidesPerView: 1, centeredSlides: false } },
    centeredSlides: false,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDataActionInitiate());
  }, [dispatch])

  const getproductdata = useSelector((state) => state.getproductdata);
  const d = getproductdata.data;

  console.log("dineshdjdhj", d[0]?.Music, typeof d)
  const id = Object.keys(d)[0];
  console.log("id", d[id])
  const events = d[id]?.Events || [];
  const music = d[id]?.Music || [];
  const movies = d[id]?.['Recommended Movies'] || [];
  const premieres = d[id]?.premieres || [];
  console.log('music', music)

  console.log('getproductdataaaaaaaa', getproductdata)
  const navigate = useNavigate();
  const redirectToMoviePage = (id) => {
    navigate(`/movies/${id}`)

  }

  const redirectToEventPage = (id) => {
    navigate(`/events/${id}`)

  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>


      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Box sx={{ width: "100%" }}>
            <Swiper {...heroSwiperProps}>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/doaaeqnk2/image/upload/v1763724526/1760430005960_popccweb_uhrlbp.avif" alt="image1" style={{ width: '100%', height: 'auto', maxHeight: 520, objectFit: 'cover' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/doaaeqnk2/image/upload/v1763724526/1763640698741_ariellaweb_sieteo.avif" alt="image2" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/doaaeqnk2/image/upload/v1763724526/1761907921032_amusementparkdesktop_oat006.avif" alt="image3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.cloudinary.com/doaaeqnk2/image/upload/v1763724526/1763188137924_linkinparkwebnew_onk2gg.avif" alt="image4" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Container>

      <Container sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant='h4'>Recommended Movies</Typography>
        </Box>

        <Swiper {...commonSwiperProps}>
          {movies?.map((itemm, index) => (
            <SwiperSlide key={index} onClick={() => redirectToMoviePage(itemm.title)}>
              <Card sx={{ width: '100%', borderRadius: 4, overflow: 'hidden', my: 4, boxShadow: 'none' }} elevation={3}>
                <img
                  src={itemm.img}
                  alt={itemm.title}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
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


      <Box>
        <Box sx={{ my: 4, px: { xs: 1, md: 2 }, display: 'flex', justifyContent: 'center' }}>
          <img src="https://res.cloudinary.com/doaaeqnk2/image/upload/v1763725523/stream-leadin-web-collection-202210241242_v2jpzi.avif" alt="" style={{ width: '100%', maxWidth: 1240, height: 'auto', objectFit: 'cover' }} />
        </Box>
      </Box>

      <Container sx={{ mt: 6 }}>
        <Typography variant='h4' sx={{ mb: 2 }}>The best of Live events</Typography>
        <Swiper {...commonSwiperProps}>
          {events?.map((itemm, index) => (
            <SwiperSlide key={index} onClick={() => redirectToEventPage(itemm.title)}>
              <Card sx={{ width: '100%', maxHeight: '540px', borderRadius: 4, overflow: 'hidden', my: 4, boxShadow: 'none' }} elevation={2}>
                <img src={itemm.img} alt={itemm.title || 'event'} style={{ width: '100%', height: 'auto', aspectRatio: '1 / 1', objectFit: 'cover' }} />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <Box sx={{ bgcolor: '#2B3148' }}>
        <Container>
          <Box>
            <img alt="Tvod Offer" width="100%" height="100%" fetchpriority="auto" className="sc-eykeme-1 iVbwwW" style={{ borderRadius: '0px', opacity: 1, transition: '0.5s', width: '100%' }} src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"></img>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: { xs: 'center', md: 'space-evenly' } }}>
            {premieres?.map((itemm) => (
              <Card sx={{ width: { xs: '100%', sm: 220, md: 255 }, maxHeight: '540px', borderRadius: 4, overflow: 'hidden', my: 2, boxShadow: 'none' }} elevation={2}>
                <img src={itemm.img} alt={itemm.title || 'music'} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                <CardContent sx={{ py: 2 }}>
                  <Typography variant="subtitle2" noWrap>{itemm.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{itemm.Subtitle}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Container sx={{ mt: 6, mb: 6 }}>
        <Typography variant='h4' sx={{ mb: 2 }}>Your Music Studio</Typography>
        <Swiper {...commonSwiperProps}>
          {music?.map((itemm, index) => (
            <SwiperSlide key={index}>
              <Card sx={{ width: '100%', maxHeight: '540px', borderRadius: 4, overflow: 'hidden', my: 4, boxShadow: 'none' }} elevation={2}>
                <img src={itemm.img} alt={itemm.title || 'music'} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                <CardContent sx={{ py: 2 }}>
                  <Typography variant="subtitle2" noWrap>{itemm.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{itemm.Subtitle}</Typography>
                </CardContent>
              </Card>

            </SwiperSlide>
          ))}
        </Swiper>
      </Container>


      <Container sx={{ mt: 6, mb: 6 }}>
        <Typography variant='h4' sx={{ mb: 2 }}>Outdoor events</Typography>
        <Swiper {...commonSwiperProps}>
          {music?.map((itemm, index) => (
            <SwiperSlide key={index}>
              <Card sx={{ width: '100%', maxHeight: '540px', borderRadius: 4, overflow: 'hidden', my: 4, boxShadow: 'none' }} elevation={2}>
                <img src={itemm.img} alt={itemm.title || 'music'} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                <CardContent sx={{ py: 2 }}>
                  <Typography variant="subtitle2" noWrap>{itemm.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{itemm.Subtitle}</Typography>
                </CardContent>
              </Card>

            </SwiperSlide>
          ))}
        </Swiper>
      </Container>



      <Container sx={{ mt: 6, mb: 6 }}>
        <Typography variant='h4' sx={{ mb: 2 }}>Laughter Therapy</Typography>
        <Swiper {...commonSwiperProps}>
          {music?.map((itemm, index) => (
            <SwiperSlide key={index}>
              <Card sx={{ width: '100%', maxHeight: '540px', borderRadius: 4, overflow: 'hidden', my: 4, boxShadow: 'none' }} elevation={2}>
                <img src={itemm.img} alt={itemm.title || 'music'} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
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
