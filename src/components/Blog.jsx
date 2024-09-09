import React, { useState, useEffect } from "react";
import { Box, Heading, Image, Text, Button, VStack, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import Slider from "react-slick";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axiosInstance from "./axiosInstance"; 
import couple from '../assets/couple.jpg'
import { Link } from "react-router-dom";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get("/blog"); // Adjust if needed
        setBlogs(response.data);
      } catch (error) {
        setError("Failed to fetch blog data");
        console.error("Error fetching blog data:", error);
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
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box py="10" px={{ base: "4", md: "8", lg: "16" }}>
      <Heading textAlign="center" mb="8">
        Recent News & Articles
      </Heading>
      <Slider {...settings}>
        {blogs.map((blog) => (
          <VStack
            key={blog.id}
            p="4"
            borderRadius="md"
            boxShadow="md"
            bg="white"
            textAlign="center"
            spacing="4"
            maxW="sm"
            mx="auto"
            h="400px"
            w="100%"
            mb="4"
          >
            <Box borderRadius="md" overflow="hidden" h="200px" w="100%" mb="4">
              <Image
                src={couple}
                alt={blog.title}
                borderRadius="md"
                objectFit="cover"
                h="100%"
                w="100%"
              />
            </Box>
            <Text fontSize="lg" fontWeight="bold">
              {blog.title}
            </Text>
            <Text fontSize="sm">{blog.description}</Text>
            <Link to={`/single-blog/${blog.id}`}>
             <Button
              as="a"
              href="#"
              variant="link"
              colorScheme="teal"
              rightIcon={<ArrowForwardIcon />}
            >
              Read More
            </Button> 
            </Link>
          </VStack>
        ))}
      </Slider>
    </Box>
  );
};

export default Blog;
