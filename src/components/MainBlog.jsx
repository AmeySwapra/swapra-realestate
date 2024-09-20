import React, { useEffect, useState } from 'react';
import {
  chakra,
  Box,
  SimpleGrid,
  Spinner,
  Alert,
  AlertIcon,
  Container,
  Image,
  Button,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import broker from '../assets/broker.jpg'; 
import Pagination from './common/Pagination';
import axiosInstance from '../axiosInstance';


const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const blogsPerPage = 6; 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get('/blog');
        setBlogs(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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
          {error.message || 'An error occurred'}
        </Alert>
      </Box>
    );
  }

  
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </SimpleGrid>

      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

const BlogCard = ({ blog }) => {
  return (
    <Box
      borderWidth="1px"
      _hover={{ shadow: 'lg' }}
      rounded="md"
      overflow="hidden"
      bg={'white'}
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
    >
      <Image
        src={blog.image || broker}
        objectFit="cover"
        w="100%"
        h="200px"
        alt={blog.title}
      />
      <Box p={{ base: 3, sm: 5 }} flex="1">
        <Box mb={4}>
          <chakra.h3
            fontSize={{ base: 'lg', sm: 'xl' }}
            fontWeight="bold"
            lineHeight="1.2"
            mb={2}
          >
            {blog.title}
          </chakra.h3>
          <Text fontSize={{ base: 'md', sm: 'lg' }} noOfLines={2}>
            {blog.description}
          </Text>
        </Box>
        <Box mt="auto" mb={4}>
          <Link to={`/single-blog/${blog.id}`}>
            <CustomButton colorScheme="teal" variant="solid">
              Read More
            </CustomButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const CustomButton = ({ children, ...props }) => {
  return (
    <Button textTransform="uppercase" lineHeight="inherit" rounded="md" {...props}>
      {children}
    </Button>
  );
};

export default BlogPage;



  
  