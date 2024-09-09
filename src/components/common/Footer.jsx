'use client'

import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logo.png'


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg="lightgrey"
      color={useColorModeValue('Black')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Our Pages</ListHeader>
            <Box as="a" href={'/'}>
              Home
            </Box>
            <Box as="a" href={'/about-us'}>
              About Us
            </Box>
            <Box as="a" href={'/properties'}>
              Property
            </Box>
            <Box as="a" href={'/blog'}>
              Blog
            </Box>
            <Box as="a" href={'/contact'}>
              Contact Us
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Services</ListHeader>
            <Box as="a" href={'/'}>
              Buying
            </Box>
            <Box as="a" href={'/'}>
              Selling
            </Box>
            <Box as="a" href={'/'}>
              Renting
            </Box>
            <Box as="a" href={'/'}>
              Property Mangement
            </Box>
            <Box as="a" href={'/'}>
              Consultaion
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
           
            <Box as="a" href={'/'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'/'}>
              Terms of Service
            </Box>
            
          </Stack>

          <Stack align={'flex-start'}>
            <Image src={logo}  alt='Swapra-logo' width='200px' />
            <Text>At JustHome, we bring your dream home to reality with expert real estate services. Discover properties that fit your lifestyle and budget effortlessly.</Text> 
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© All rights are reserved to JustHome.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

