import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  VStack,
  Alert,
  AlertIcon,
  Spinner,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Flex,
  
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons';
import axiosInstance from '../axiosInstance';
import propertyImage from '../assets/Property3.jpg';
import Pagination from './common/Pagination';


const PropertyGrid = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;




  useEffect(() => {
    fetchProperties();
  }, []);



  const fetchProperties = async () => {
    try {
      const response = await axiosInstance.get('/properties');
      setProperties(response.data);
    } catch (error) {
      setError('Failed to Fetch The Properties');
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

 

  

  const filteredProperties = properties.filter((property) => {
    const query = searchQuery.toLowerCase();
    return (
      property.name.toLowerCase().includes(query) ||
      property.location.toLowerCase().includes(query)
    );
  });

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
        Featured Properties
      </Heading>

      <HStack spacing="4" mb="6" justifyContent="center">
       

        <InputGroup width="500px">
          <InputLeftElement>
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            placeholder="Search by Name or Location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>
      </HStack>

      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
        {currentProperties.length > 0 ? (
          currentProperties.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <GridItem
                p="4"
                borderRadius="md"
                boxShadow="lg"
                bg="white"
                textAlign="left"
                _hover={{ transform: 'scale(1.05)', transition: '0.3s ease' }}
              >
                <VStack spacing="4">
                  <Image
                    src={property.image || propertyImage}
                    alt={property.name}
                    borderRadius="md"
                    w="100%"
                    h="200px"
                    objectFit="cover"
                  />
                  <Text fontSize="lg" fontWeight="bold">
                    {property.name}
                  </Text>
                  <Text fontSize="md" color="gray.500">
                    Price: ₹ {property.price}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Location: {property.location}
                  </Text>
                </VStack>
              </GridItem>
            </Link>
          ))
        ) : (
          <Flex justifyContent="center" alignItems="center" h="200px">
            <Text textAlign={'center'} color="red.500">No properties found</Text>
          </Flex>
        )}
      </Grid>

      {filteredProperties.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      
    </Box>
  );
};

export default PropertyGrid;







