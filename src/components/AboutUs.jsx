import React from 'react';
import { Box, Flex, Image, Text, Button,  } from '@chakra-ui/react';
import property1 from '../assets/property1.jpg'
import property2 from '../assets/property2.jpg'
import { Link } from 'react-router-dom';
function AboutUs() {
  return (
    <Box as="section" py="10" px={{ base: '4', md: '8', lg: '16' }}>
      <Flex 
        direction={{ base: 'column', lg: 'row' }} 
        align="center" 
        justify="space-between"
        gap={{ base: '10', lg: '14' }} 
      >
        {/* Left: Images */}
        <Box position="relative" w={{ base: '100%', lg: '50%' }} h="auto">
          <Image 
            src={property1} 
            alt="Real Estate 1" 
            borderRadius="md" 
            boxShadow="lg"
            w="100%"
            h="auto"
          />
          <Image 
            src={property2}
            alt="Real Estate 2"
            borderRadius="md"
            boxShadow="lg"
            position="absolute"
            bottom="-60px"
            right="-20px"
            w="70%"
            h="auto"
          />
        </Box>

        {/* Right: Information */}
        <Box 
          flex="1" 
          textAlign={{ base: 'center', lg: 'left' }} 
          w={{ base: '100%', lg: '50%' }} 
          mt={{ base: '8', lg: '0' }} 
        >
          <Text 
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} 
            fontWeight="bold" 
            mb="4"
          >
            About Our Real Estate Business
          </Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} mb="6">
            At JustHome, we are dedicated to providing our clients with the highest level of service in the real estate industry. Whether you are buying, selling, or renting, our team of experienced professionals is here to guide you every step of the way. Our extensive market knowledge and commitment to excellence make us the trusted choice for all your real estate needs.
          </Text>
          <Link to={'/about-us'}>
            <Button colorScheme="teal" size="lg">
                Learn More About Us
          </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default AboutUs;


