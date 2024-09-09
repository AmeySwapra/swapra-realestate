import React, { useEffect, useState } from 'react';
import {
  Box,
  IconButton,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import axiosInstance from './axiosInstance';


const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Banner() {
  const [slider, setSlider] = React.useState(null);
  const [cards, setCards] = useState([]);

  const top = '50%';
  const side = '40px';

  useEffect(() => {
     fetchBannerCards()
  },[])

  const fetchBannerCards = async () => {
      try {
        const response = await axiosInstance.get('/bannercard')
        setCards(response.data)
      } catch (error) {
        console.log('Error while fetching the banner cards', error)
      } 
  }

  
  
  
  return (
    <Box position="relative" height="600px" width="full" overflow="hidden">
    
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={(s) => setSlider(s)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height="600px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container
              centerContent
              textAlign="center"
              maxW="container.md"
              color="black"
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Stack
                spacing={50}
                align="center"
                textAlign="center"
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
