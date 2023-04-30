import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Input,
  SimpleGrid,
  Spinner,
  Image,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import api from '../api';
import Ship from '../components/Ship';

function HomePage() {
  const [items, setItems] = useState([]);
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  const handleSearch = () => {
    setTerm(document.getElementById('search').value);
  };

  const loadMore = () => {
    setLoading(true);
    api
      .next(nextPageUrl)
      .then((res) => {
        setItems([...items, ...res.data.results]);
        setNextPageUrl(res.data.next);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    api
      .search(term)
      .then((res) => {
        setItems(res.data.results);
        setNextPageUrl(res.data.next);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [term]);

  return (
    <Box
      bg="rgb(36,0,34);"
      bgGradient="linear-gradient(90deg, rgba(36,0,34,1) 0%, rgba(111,25,91,1) 41%, #701425 100%)"
      pb={6}
      minH="100vh"
    >
      <Box
        w="100%"
        h="96"
        color="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={8}
      >
        <Image h={150} src="/assets/images/heading.png" alt="Star Wars" />
        <Flex w="95%" zIndex={2} justify="center" gap={4}>
          <Input
            id="search"
            placeholder="Search"
            defaultValue={term}
            w={{
              base: '90%',
              md: '50%',
              lg: '25%',
            }}
            color="white"
            colorScheme="purple"
          />
          <Button onClick={handleSearch} colorScheme="purple">
            <SearchIcon />
          </Button>
        </Flex>
      </Box>

      <Container maxW="container.xl">
        {loading ? (
          <Flex justifyContent="center" height="36">
            <Spinner size="xl" />
          </Flex>
        ) : null}
        <SimpleGrid
          columns={{
            base: 2,
            md: 3,
            lg: 4,
          }}
          spacing={10}
        >
          {items.map((x) => (
            <Ship data={x} key={x.name} />
          ))}
        </SimpleGrid>
        <Center mt={6}>
          <Button
            colorScheme="purple"
            mx="auto"
            onClick={loadMore}
            isLoading={loading}
            isDisabled={nextPageUrl === null}
            loadingText="Loading..."
          >
            Load More
          </Button>
        </Center>
      </Container>
    </Box>
  );
}

export default HomePage;
