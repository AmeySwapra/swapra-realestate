import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, VStack, Image, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import propertyImage from '../assets/Property3.jpg';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPropertyDetails();
  }, [id]);

  const fetchPropertyDetails = async () => {
    try {
      console.log('Fetching property with ID:', id); // Log ID
      const response = await axiosInstance.get(`/properties/${id}`);
      console.log('Property details:', response.data); // Log response data
      setProperty(response.data);
    } catch (error) {
      console.error('Error fetching property details:', error.response || error.message);
      setError('Failed to Fetch the Property Details');
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
      {property ? (
        <VStack spacing="4" textAlign="left">
          <Image
            src={propertyImage} // Ensure this is the desired image
            alt={property.name}
            borderRadius="md"
            w="100%"
            h="400px"
            objectFit="cover"
          />
          <Heading>{property.name}</Heading>
          <Text fontSize="lg" color="gray.600">
            Price: ${property.price}
          </Text>
          <Text fontSize="lg" color="gray.600">
            Location: {property.location}
          </Text>
          <Text fontSize="lg" color="gray.600">
            Bedrooms: {property.bhk}
          </Text>
          <Text fontSize="lg" color="gray.600">
            Area: {property.area} sqft
          </Text>
          <Text fontSize="lg" color="gray.600">
            Additional Details: This is a premium property located in the heart of the city, offering a scenic view and modern amenities.
          </Text>
        </VStack>
      ) : (
        <Text textAlign="center">No property details available</Text>
      )}
    </Box>
  );
};

export default PropertyDetail;

