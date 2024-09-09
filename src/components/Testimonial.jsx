import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Text, Image, Icon } from '@chakra-ui/react';
import { FaUsers } from 'react-icons/fa';
import axios from 'axios';
import avatar from '../assets/avatar.png'

const SimpleTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://66d80c4237b1cadd805324f3.mockapi.io/testimonial');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [testimonials.length]);

  return (
    <Box bg="#1F4B43" color="white" py={10} px={4} minHeight="400px" overflow="hidden">
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        width="100%" 
        maxWidth="1200px" 
        mx="auto" 
        height="100%"
        align="center"
        justify="space-between"
        wrap="wrap"
      >
        {/* Left Section */}
        <Box 
          flex="1" 
          p={4} 
          maxWidth={{ base: '100%', md: '50%' }} 
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading size="lg" mb={10}>What Our Customers Say</Heading>
          <Text mb={10}>
            Here are some comments from our satisfied customers. We value their feedback and strive to provide the best service possible.
          </Text>
          <Flex align="center" justify={{ base: 'center', md: 'flex-start' }}>
            <Icon as={FaUsers} boxSize={8} mr={2} />
            <Text fontSize={{ base: 'md', md: 'xl' }}>10M Happy People</Text>
          </Flex>
        </Box>

        {/* Right Section */}
        <Box 
          flex="1" 
          p={4} 
          maxWidth={{ base: '100%', md: '50%' }} 
          height={{ base: 'auto', md: '70%' }} 
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
        >
          {testimonials.length > 0 && (
            <Box
              p={4}
              borderWidth={1}
              borderRadius="md"
              bg="white"
              color="black"
              minHeight="250px" // Fixed height for the card
              maxHeight="300px" // Ensures card does not grow beyond this height
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              overflow="hidden"
            >
              <Flex align="center" mb={3} justify="center">
                <Image 
                  src={avatar} 
                  alt={testimonials[currentIndex].name} 
                  borderRadius="full" 
                  boxSize="50px" 
                  mr={3} 
                />
                <Text fontWeight="bold">{testimonials[currentIndex].name}</Text>
              </Flex>
              <Text>{testimonials[currentIndex].description}</Text>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default SimpleTestimonial;










