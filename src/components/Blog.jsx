import React from 'react';
import { Box, Heading, Image, Text, Button, VStack } from '@chakra-ui/react';
import Slider from 'react-slick';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const Blog = () => {
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
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box py="10" px={{ base: '4', md: '8', lg: '16' }}>
      <Heading textAlign="center" mb="8">
        Recent News & Articles
      </Heading>
      <Slider {...settings}>
        {/* Card 1 */}
        <VStack
          p="4"
          borderRadius="md"
          boxShadow="lg"
          bg="white"
          textAlign="center"
          spacing="4"
          maxW="sm"
          mx="auto"
        >
          <Image
            src="https://via.placeholder.com/300x200"
            alt="Blog 1"
            borderRadius="md"
            w="100%"
            h="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            Blog Title 1
          </Text>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            libero eget...
          </Text>
          <Button
            as="a"
            href="#"
            variant="link"
            colorScheme="teal"
            rightIcon={<ArrowForwardIcon />}
          >
            Read More
          </Button>
        </VStack>

        {/* Card 2 */}
        <VStack
          p="4"
          borderRadius="md"
          boxShadow="lg"
          bg="white"
          textAlign="center"
          spacing="4"
          maxW="sm"
          mx="auto"
        >
          <Image
            src="https://via.placeholder.com/300x200"
            alt="Blog 2"
            borderRadius="md"
            w="100%"
            h="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            Blog Title 2
          </Text>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            libero eget...
          </Text>
          <Button
            as="a"
            href="#"
            variant="link"
            colorScheme="teal"
            rightIcon={<ArrowForwardIcon />}
          >
            Read More
          </Button>
        </VStack>

        {/* Card 3 */}
        <VStack
          p="4"
          borderRadius="md"
          boxShadow="lg"
          bg="white"
          textAlign="center"
          spacing="4"
          maxW="sm"
          mx="auto"
        >
          <Image
            src="https://via.placeholder.com/300x200"
            alt="Blog 3"
            borderRadius="md"
            w="100%"
            h="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            Blog Title 3
          </Text>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            libero eget...
          </Text>
          <Button
            as="a"
            href="#"
            variant="link"
            colorScheme="teal"
            rightIcon={<ArrowForwardIcon />}
          >
            Read More
          </Button>
        </VStack>

        {/* card 4 */}
        <VStack
          p="4"
          borderRadius="md"
          boxShadow="lg"
          bg="white"
          textAlign="center"
          spacing="4"
          maxW="sm"
          mx="auto"
        >
          <Image
            src="https://via.placeholder.com/300x200"
            alt="Blog 3"
            borderRadius="md"
            w="100%"
            h="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            Blog Title 3
          </Text>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            libero eget...
          </Text>
          <Button
            as="a"
            href="#"
            variant="link"
            colorScheme="teal"
            rightIcon={<ArrowForwardIcon />}
          >
            Read More
          </Button>
        </VStack>

        {/* card 5 */}
        <VStack
          p="4"
          borderRadius="md"
          boxShadow="lg"
          bg="white"
          textAlign="center"
          spacing="4"
          maxW="sm"
          mx="auto"
        >
          <Image
            src="https://via.placeholder.com/300x200"
            alt="Blog 3"
            borderRadius="md"
            w="100%"
            h="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            Blog Title 3
          </Text>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            libero eget...
          </Text>
          <Button
            as="a"
            href="#"
            variant="link"
            colorScheme="teal"
            rightIcon={<ArrowForwardIcon />}
          >
            Read More
          </Button>
        </VStack>
        {/* Add more cards as needed */}
      </Slider>
    </Box>
  );
};

export default Blog;


