import React from 'react';
import { Box, Heading, Flex, List, ListItem, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.300"
      borderTop="1px solid"
      borderColor="gray.300"
      py="2.5rem"
      fontSize="0.875rem"
    >
      <Box
        maxW="64rem"
        marginX="auto"
        pb="2rem"
        mb="1.5rem"
        px={10}
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        <Flex flexWrap="wrap" alignItems="start" justifyContent="space-between">
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
              Company Name
            </Heading>
            <List lineHeight="2" justifyContent="center">
              <LinkItem text="Careers" />
              <LinkItem text="News" />
              <LinkItem text="Policies" />
              <LinkItem text="Help" />
              <LinkItem text="Diversity & Belonging" />
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
              Discover
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Trust &amp; Safety" />
              <LinkItem text="Travel Credit" />
              <LinkItem text="Gift Cards" />
              <LinkItem text="Airbnb Citizen" />
              <LinkItem text="Business Travel" />
              <LinkItem text="Things To Do" isTag={true} tagText="New" />
              <LinkItem text="Airbnbmag" />
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Heading as="h5" color="gray.700" mb="0.5rem" fontSize="0.875rem" fontWeight="600">
              Hosting
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Why Host" />
              <LinkItem text="Hospitality" />
              <LinkItem text="Responsible Hosting" />
              <LinkItem text="Community Center" />
              <LinkItem text="Host an Experience" isTag={true} tagText="New" />
              <LinkItem text="Open Homes" />
              <LinkItem text="Donations" isTag={true} tagText="New" />
            </List>
          </Box>
          <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
            <Flex justifyContent="start" mb="0.5rem" alignItems="baseline">
              <Link href="#" mr="0.5rem">
                <svg
                  style={{ width: '1rem', height: '1rem' }}
                  fill="#008F94"
                  viewBox="0 0 32 32"
                  role="img"
                  aria-label="Navigate to Facebook"
                  focusable="false"
                >
                  <path
                    d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link href="#" mr="0.5rem">
                <svg
                  style={{ width: '1rem', height: '1rem' }}
                  fill="#008F94"
                  viewBox="0 0 32 32"
                  role="img"
                  aria-label="Navigate to Twitter"
                  focusable="false"
                >
                  <path
                    d="m31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a13.05 13.05 0 0 1 -3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 0 0 5.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33a12.66 12.66 0 0 0 3.09-3.16"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link href="#" mr="0.5rem">
                <svg
                  style={{ width: '1rem', height: '1rem' }}
                  fill="#008F94"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Navigate to Instagram"
                  focusable="false"
                >
                  <path
                    d="m23.09.91c-.61-.61-1.33-.91-2.17-.91h-17.84c-.85 0-1.57.3-2.17.91s-.91 1.33-.91 2.17v17.84c0 .85.3 1.57.91 2.17s1.33.91 2.17.91h17.84c.85 0 1.57-.3 2.17-.91s.91-1.33.91-2.17v-17.84c0-.85-.3-1.57-.91-2.17zm-14.48 7.74c.94-.91 2.08-1.37 3.4-1.37 1.33 0 2.47.46 3.41 1.37s1.41 2.01 1.41 3.3-.47 2.39-1.41 3.3-2.08 1.37-3.41 1.37c-1.32 0-2.46-.46-3.4-1.37s-1.41-2.01-1.41-3.3.47-2.39 1.41-3.3zm12.66 11.63c0 .27-.09.5-.28.68a.92.92 0 0 1 -.67.28h-16.7a.92.92 0 0 1 -.68-.28.92.92 0 0 1 -.28-.68v-16.7c0-.27.09-.5.28-.68a.92.92 0 0 1 .68-.28h16.7c.27 0 .5.09.68.28.18.18.28.41.28.68v16.7zm-.5-19.5h-17v-1.5h17v1.5zm1 19.5v-16.7c0-2.21-1.73-4-3.88-4h-16.7c-2.15 0-3.88 1.79-3.88 4v16.7c0 2.21 1.73 4 3.88 4h16.7c2.15 0 3.88-1.79 3.88-4"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link href="#">
                <svg
                  style={{ width: '1rem', height: '1rem' }}
                  fill="#008F94"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Navigate to LinkedIn"
                  focusable="false"
                >
                  <path
                    d="M19.4 3.1c-.91-.02-1.79.38-2.47 1.06a3.34 3.34 0 0 0-1.05 2.49v13.3c0 .97.39 1.85 1.05 2.49.68.68 1.56 1.08 2.47 1.06h.04c.93.02 1.8-.37 2.47-1.06a3.34 3.34 0 0 0 1.05-2.49v-13.3c0-.97-.39-1.85-1.05-2.49a3.34 3.34 0 0 0-2.47-1.06zm-4.23 13.52v-8.56h2.21v8.56h-2.21zm-2.69-8.5c.03.19.03.39.03.59v.05c0 .2-.02.4-.05.59-.02.2-.07.39-.14.58-.11.33-.27.64-.49.94a1.91 1.91 0 0 1-1.07.62c-.21.02-.43.02-.64.02-.22 0-.43-.01-.64-.02-.21-.02-.43-.07-.63-.13-.41-.1-.79-.32-1.1-.62a1.95 1.95 0 0 1-.57-1.55c0-.19.03-.39.05-.58.04-.19.1-.37.18-.55.14-.35.34-.68.58-.96.26-.29.56-.56.89-.74.4-.2.83-.31 1.28-.31.42 0 .85.11 1.22.31.43.21.81.53 1.12.91zm-4.57-6.69c0 .97.39 1.85 1.05 2.49.68.68 1.56 1.08 2.47 1.06.91.02 1.79-.38 2.47-1.06.68-.68 1.05-1.56 1.05-2.49v-2.33c0-.97-.39-1.85-1.05-2.49a3.34 3.34 0 0 0-2.47-1.06c-.91-.02-1.79.38-2.47 1.06a3.34 3.34 0 0 0-1.05 2.49v2.33zm0 0"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box
        maxW="64rem"
        marginX="auto"
        px={10}
        pb="2rem"
        fontSize="0.75rem"
        textAlign="center"
        color="gray.600"
      >
        <Text>© 2024 Company Name. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

const LinkItem = ({ text, isTag, tagText }) => (
  <ListItem>
    <Link href="#" color="gray.600" _hover={{ textDecoration: 'underline' }}>
      {text}
      {isTag && (
        <span style={styles.tag}>{tagText}</span>
      )}
    </Link>
  </ListItem>
);

const styles = {
  tag: {
    backgroundColor: '#f7d51d',
    borderRadius: '0.25rem',
    color: '#333',
    fontSize: '0.625rem',
    fontWeight: '700',
    marginLeft: '0.5rem',
    padding: '0.1rem 0.5rem',
    textTransform: 'uppercase',
  },
  footer: {
    backgroundColor: '#f7f7f7',
    borderTop: '1px solid #ddd',
    padding: '2rem 0',
    fontSize: '0.875rem',
  },
  container: {
    maxWidth: '64rem',
    margin: '0 auto',
    paddingBottom: '2rem',
    paddingLeft: '2.5rem',
    paddingRight: '2.5rem',
    borderBottom: '1px solid #ddd',
  },
  section: {
    width: '100%',
    marginBottom: '1.5rem',
  },
  heading: {
    color: '#333',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '600',
  },
  list: {
    lineHeight: '2',
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  socialLink: {
    marginRight: '0.5rem',
  },
  icon: {
    width: '1rem',
    height: '1rem',
  },
};

export default Footer;

