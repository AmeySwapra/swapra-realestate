import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Text,
  Heading,
  VStack,
  SimpleGrid,
  Image,
  GridItem,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const [userProperties, setUserProperties] = useState([]);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      const storedProperties = JSON.parse(localStorage.getItem('properties')) || [];
      setUserProperties(storedProperties);
    } else {
      navigate('/'); 
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setUserProperties([]);
    navigate('/');
    toast({
      title: 'Logged Out',
      description: "You have been logged out successfully.",
      status: 'info',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
  };

  return (
    <Box p={6}>
      <HStack justifyContent="space-between" mb={6}>
        <Heading size="md">Welcome, {user?.username || 'User'}</Heading>
        <Button colorScheme="red" onClick={handleLogout}>
          Logout
        </Button>
      </HStack>

      <Text>Email: {user?.email}</Text>

      <Heading size="md" mt="6">Your Added Properties</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={4}>
        {userProperties.length > 0 ? (
          userProperties.map((property, index) => (
            <GridItem key={index} p="4" borderRadius="md" boxShadow="lg" bg="white">
              <VStack spacing="4">
                <Image
                  src={property.image || 'https://via.placeholder.com/300'}
                  alt={property.name}
                  borderRadius="md"
                  w="100%"
                  h="200px"
                  objectFit="cover"
                />
                <Text fontSize="lg" fontWeight="bold">{property.name}</Text>
                <Text fontSize="md" color="gray.500">Price: {property.price}</Text>
                <Text fontSize="sm" color="gray.500">BHK: {property.bhk}</Text>
                <Text fontSize="sm" color="gray.500">Area: {property.area} sqft</Text>
                <Text fontSize="sm" color="gray.500">Location: {property.location}</Text>
              </VStack>
            </GridItem>
          ))
        ) : (
          <Text>No properties added yet.</Text>
        )}
      </SimpleGrid>
    </Box>
  );
}

export default Profile;


