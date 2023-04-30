import { Flex, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Flex
      bg="rgb(36,0,34);"
      bgGradient="linear-gradient(90deg, rgba(36,0,34,1) 0%, rgba(111,25,91,1) 41%, #701425 100%)"
      pb={6}
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      position="relative"
      flexDirection="column"
      gap={4}
      color="white"
    >
      <Heading textAlign="center" noOfLines={1}>
        404 Not Found
      </Heading>
      <Link to="/">
        <Button colorScheme="purple" size="lg" rounded="full">
          Back to Home
        </Button>
      </Link>
    </Flex>
  );
};

export default NotFoundPage;
