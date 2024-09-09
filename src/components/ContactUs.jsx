import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <Box  color="black" py={10} px={{ base: 5, md: 20 }} id="contact-us">
      <Heading as="h2" size="xl" textAlign="center" mb={10}>
        Contact Us
      </Heading>

      {/* Contact Form & Details */}
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10} maxW="1200px" mx="auto">
        {/* Left side - Contact Form */}
        <GridItem>
          <VStack spacing={5}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Your Name"
                bg="gray.700"
                color="white"
                border="none"
                _placeholder={{ color: 'gray.400' }}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Your Email"
                bg="gray.700"
                color="white"
                border="none"
                _placeholder={{ color: 'gray.400' }}
              />
            </FormControl>

            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Your Message"
                bg="gray.700"
                color="white"
                border="none"
                _placeholder={{ color: 'gray.400' }}
              />
            </FormControl>

            <Button colorScheme="teal" size="lg" width="full">
              Send Message
            </Button>
          </VStack>
        </GridItem>

        {/* Right side - Contact Details */}
        <GridItem>
          <VStack spacing={5} align="flex-start">
            <Flex align="center">
              <Icon as={FaPhoneAlt} boxSize={6} color="teal.300" mr={3} />
              <Text fontSize="lg">+123 456 7890</Text>
            </Flex>

            <Flex align="center">
              <Icon as={FaEnvelope} boxSize={6} color="teal.300" mr={3} />
              <Text fontSize="lg">info@swaprarealestate.com</Text>
            </Flex>

            <Flex align="center">
              <Icon as={FaMapMarkerAlt} boxSize={6} color="teal.300" mr={3} />
              <Text fontSize="lg">
                1234 Real Estate Ave, Suite 100
                <br />
                City, Country
              </Text>
            </Flex>
          </VStack>
        </GridItem>
      </Grid>

      {/* Google Map */}
      <Box mt={10} height="400px">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9229122146965!2d144.96187821531695!3d-37.81620997975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57786faee7274bc!2sVictoria%20St%2C%20Melbourne%20VIC%203001%2C%20Australia!5e0!3m2!1sen!2sus!4v1661020988713!5m2!1sen!2sus"
          width="100%"
          height="100%"
          title='map'
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};

export default ContactUs;
