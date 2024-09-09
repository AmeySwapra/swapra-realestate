// ServicesOverview.js
import React from 'react';
import { Box, Heading, SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { FaHome, FaDollarSign, FaKey, FaBuilding, FaComments } from 'react-icons/fa';

const services = [
  { id: 1, name: 'Buying', icon: FaHome },
  { id: 2, name: 'Selling', icon: FaDollarSign },
  { id: 3, name: 'Renting', icon: FaKey },
  { id: 4, name: 'Property Management', icon: FaBuilding },
  { id: 5, name: 'Consultation', icon: FaComments },
];

const ServicesOverview = () => {
  return (
    <Box py="10" px={{ base: '4', md: '8', lg: '16' }} mt={'20'} bg="gray.50">
      <Heading textAlign="center" mb="8">
        Our Services
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 5 }} spacing={8}>
        {services.map((service) => (
          <VStack key={service.id} spacing="4" textAlign="center">
            <Box fontSize="4xl" color="teal.500">
              <service.icon />
            </Box>
            <Text fontSize="lg" fontWeight="bold">
              {service.name}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ServicesOverview;
