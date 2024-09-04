import React, { useState, useEffect } from 'react';
import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import axios from 'axios';

const Property = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('https://66d80c4237b1cadd805324f3.mockapi.io/property');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box py="10" px={{ base: '4', md: '8', lg: '16' }}>
      <Heading textAlign="center" mb="8">
        Featured Properties
      </Heading>
      {loading ? (
        <Text textAlign="center">Loading...</Text>
      ) : (
        <Slider {...settings}>
          {properties.map(property => (
            <VStack
              key={property.id}
              p="4"
              borderRadius="md"
              boxShadow="lg"
              bg="white"
              textAlign="left"
              spacing="4"
              maxW="sm"
              mx="auto"
            >
              <Image
                src="https://via.placeholder.com/300x200"
                alt={property.title}
                borderRadius="md"
                w="100%"
                h="auto"
              />
              <Text fontSize="lg" fontWeight="bold">
                {property.name}
              </Text>
              <Text fontSize="md" mb="2">
                {property.description}
              </Text>
              <Text fontSize="sm" color="gray.500">
                Price: ${property.price}
              </Text>
              <Text fontSize="sm" color="gray.500">
                Location: {property.location}
              </Text>
              <Text fontSize="sm" color="gray.500">
                Bedrooms: {property.bhk}
              </Text>
              <Text fontSize="sm" color="gray.500">
                area: {property.area}
              </Text>
            </VStack>
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default Property;


