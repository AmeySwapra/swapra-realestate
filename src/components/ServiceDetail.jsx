import React, { useState, useEffect } from 'react';
import { Box, Heading, SimpleGrid, VStack, Text, Image, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import property1 from '../assets/Property3.jpg'
import axiosInstance from '../axiosInstance';

const ServiceDetail = () => {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchServicesData();
  }, []);

  const fetchServicesData = async () => {
    try {
      const response = await axiosInstance.get('/servicesData');
      setServicesData(response.data); 
    } catch (error) {
      setError('Failed to fetch services data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box py="10" px={{ base: '4', md: '8', lg: '16' }} textAlign="center">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box py="10" px={{ base: '4', md: '8', lg: '16' }} textAlign="center">
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box py="10" px={{ base: '4', md: '8', lg: '16' }}>
      <Heading textAlign="center" mb="8">
        Our Services
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {servicesData.map((service) => (
          <VStack key={service.id} spacing="4" align="start">
            <Image src={service.image || property1} alt={service.name} borderRadius="md" />
            <Heading size="md">{service.name}</Heading>
            <Text>{service.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ServiceDetail;
