import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { useGoogleLogin } from '@react-oauth/google'; // Google OAuth hook
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AuthModal({ isOpen, onClose }) {
  const initialLoginData = {
    username: '',
    password: '',
  };

  const initialRegisterData = {
    username: '',
    email: '',
    password: '',
  };

  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(initialLoginData);
  const [registerData, setRegisterData] = useState(initialRegisterData);
  const toast = useToast();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://real-estate-backend-3-ydh8.onrender.com/api/auth/login', loginData, {
        withCredentials: true,
      });
      const user = response.data;
      localStorage.setItem('user', JSON.stringify(user));
      toast({
        title: 'Login successful.',
        description: `Welcome back, ${user.username}!`,
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
      setLoginData(initialLoginData);
      navigate('/properties');
    } catch (error) {
      toast({
        title: 'Login Failed.',
        description: error.response?.data?.message || 'Something went wrong!',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const handleRegisterSubmit = async () => {
    try {
      const response = await axios.post(
        'https://real-estate-backend-3-ydh8.onrender.com/api/auth/register',
        registerData,
        { withCredentials: true }
      );
      toast({
        title: 'Registration successful.',
        description: 'You have been registered successfully!',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
      setRegisterData(initialRegisterData);
    } catch (error) {
      toast({
        title: 'Registration failed.',
        description: error.response?.data?.message || 'Something went wrong!',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  // Handle Google Sign-In
  const googleLogin = useGoogleLogin({
    flow: 'auth-code',  
    onSuccess: async (codeResponse) => {
      try {
        console.log('Authorization Code Response:', codeResponse);

        
        const response = await fetch('https://real-estate-backend-3-ydh8.onrender.com/api/auth/google-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code: codeResponse.code }),
        });

        const data = await response.json();
        if (response.ok) {
          console.log('Backend Response:', data);

          toast({
            title: 'Google Login Successful.',
            description: `Welcome, ${data.username}!`,
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
          });
        } else {
          console.error('Google Login Failed:', data.message);
          toast({
            title: 'Google Login Failed.',
            description: data.message || 'Unable to login with Google.',
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
          });
        }
      } catch (error) {
        console.error('Error during Google login:', error);
        toast({
          title: 'Login Failed.',
          description: 'An unexpected error occurred. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      }
    },
    onError: (error) => {
      console.error('Login Failed:', error);
      toast({
        title: 'Google Login Failed.',
        description: 'Unable to login with Google. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    },
    useCredential: true,  
    redirect_uri: "https://justhomes.netlify.app",  
  });

  

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign-In / Register</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Login</Tab>
              <Tab>Register</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <FormControl id="login-username" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={loginData.username}
                    onChange={handleLoginChange}
                  />
                </FormControl>
                <FormControl id="login-password" isRequired mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                  />
                </FormControl>
                <Button colorScheme="teal" width="100%" mt={6} onClick={handleLoginSubmit}>
                  Login
                </Button>
                <Button
                  width="100%"
                  mt={4}
                  colorScheme="red"
                  onClick={() => googleLogin()}
                >
                  Sign in with Google
                </Button>
              </TabPanel>
              <TabPanel>
                <FormControl id="register-username" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={registerData.username}
                    onChange={handleRegisterChange}
                  />
                </FormControl>
                <FormControl id="register-email" isRequired mt={4}>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                  />
                </FormControl>
                <FormControl id="register-password" isRequired mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                  />
                </FormControl>
                <Button colorScheme="teal" width="100%" mt={6} onClick={handleRegisterSubmit}>
                  Register
                </Button>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AuthModal;

