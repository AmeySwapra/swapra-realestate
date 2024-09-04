import React from 'react';
import { 
  Box, 
  Flex, 
  Image, 
  Text, 
  Link, 
  Button, 
  IconButton, 
  Drawer, 
  DrawerBody, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerCloseButton, 
  useDisclosure 
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../../assets/logo.png';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box as="nav" px={{ base: '4', md: '6', lg: '10' }} py="4" boxShadow="sm">
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <Image 
            src={logo} 
            alt="real-estate-logo" 
            height={{ base: '20px', md: '40px', lg: '60px' }} 
            width="auto"
          />
          <Text fontSize={{ base: '20px', md: '24px', lg: '28px' }} ml="4" fontWeight="bold">
            JustHome
          </Text>
        </Flex>
        {/* Hamburger Icon for Mobile and Tablets */}
        <IconButton
          ref={btnRef}
          icon={<HamburgerIcon />}
          display={{ base: 'block', lg: 'none' }}
          onClick={onOpen}
          aria-label="Open Menu"
          variant="outline"
        />
        {/* Desktop Links */}
        <Flex display={{ base: 'none', lg: 'flex' }} gap="6" fontSize={{ md: '16px', lg: '18px' }}>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.500' }}>Home</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.500' }}>About Us</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.500' }}>Service</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.500' }}>Product</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.500' }}>Blog</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.500' }}>Contact Us</Link>
        </Flex>
        <Box display={{ base: 'none', lg: 'block' }}>
          <Button colorScheme="teal" variant="outline">
            Sign-In
          </Button>
        </Box>
      </Flex>

      {/* Drawer for Mobile and Tablet Menu */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex direction="column" gap="4" mt="8" fontSize="18px">
              <Link href="#" onClick={onClose}>Home</Link>
              <Link href="#" onClick={onClose}>About Us</Link>
              <Link href="#" onClick={onClose}>Service</Link>
              <Link href="#" onClick={onClose}>Product</Link>
              <Link href="#" onClick={onClose}>Blog</Link>
              <Link href="#" onClick={onClose}>Contact Us</Link>
              <Button colorScheme="teal" variant="outline" mt="4" onClick={onClose}>
                Sign-In
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Header;



