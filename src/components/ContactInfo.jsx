import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const ContactInfo = () => {
  return (
    <Box 
      bg="#E7C873" 
      color="black" 
      py={12} 
      px={6} 
      height="150px" 
      display="flex" 
      alignItems="center"
      borderRadius="md" 
      boxShadow="md"
    >
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        width="100%" 
        maxWidth="1200px" 
        mx="auto" 
        align="center" 
        justify="space-between"
        textAlign={{ base: 'center', md: 'left' }}
      >
        {/* Left Side */}
        <Box>
          <Text 
            fontSize={{ base: 'xl', md: '2xl' }} 
            color="orange.500" 
            fontWeight="bold" 
            mb={2}
          >
            Let's connect to Rediscover the
          </Text>
          <Text 
            fontSize={{ base: 'lg', md: 'xl' }} 
            color="black" 
            fontWeight="semibold"
          >
            Joy of New House
          </Text>
        </Box>

        {/* Right Side */}
        <Button 
          colorScheme="teal" 
          variant="solid" 
          size="lg"
          ml={{ base: 0, md: 4 }}
          mt={{ base: 4, md: 0 }}
        >
          Connect
        </Button>
      </Flex>
    </Box>
  );
};

export default ContactInfo;


