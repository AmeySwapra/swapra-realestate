import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

import property1 from '../assets/property1.jpg'
import property2 from '../assets/property2.jpg'
const AboutPageDetails = () => {
  return (
    <>
      
      <Box bg="white.100" py={10} px={{ base: 5, md: 20 }} id="about-us">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        maxW="1200px"
        mx="auto"
      >
        {/* Left side - Images */}
        <Box flex="1" mb={{ base: 5, md: 0 }} pr={{ base: 0, md: 10 }}>
          <Flex direction="column" gap={5}>
            <Image
              src={property2} // Replace with your first image
              alt="About Us 1"
              borderRadius="md"
              boxShadow="lg"
              objectFit="cover"
            />
            <Image
              src={property1} // Replace with your second image
              alt="About Us 2"
              borderRadius="md"
              boxShadow="lg"
              objectFit="cover"
            />
          </Flex>
        </Box>

        {/* Right side - About Us content */}
        <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
          <Heading as="h2" size="xl" mb={5}>
            About Us
          </Heading>
          <Text fontSize="lg" mb={5}>
            Welcome to Swapra Real Estate. With over 10 years of experience, we offer the finest properties, ensuring that you find your dream home or investment. Our team of experts is dedicated to providing top-notch services that cater to your every need.
          </Text>
          <Text fontSize="lg" mb={5}>
            From luxurious villas to modern apartments, we pride ourselves on showcasing a diverse range of properties. Our commitment is to help you make informed decisions by providing professional guidance and market expertise.
          </Text>
          
        </Box>
      </Flex>
    </Box>
    
    </>
  );
};

export default AboutPageDetails;
