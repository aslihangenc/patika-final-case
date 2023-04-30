import {
  Card,
  CardBody,
  Image,
  Divider,
  ButtonGroup,
  Heading,
  Button,
  Flex,
  CardHeader,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useLoaderData, Link as BrowserLink, Navigate } from 'react-router-dom';
import images from '../constants/images.json';

function DetailPage() {
  const data = useLoaderData();

  if (!data) {
   return <Navigate to="/404" />;
  }

  const src = images.find((item) => item.name === data.name).img;

  return (
    <Flex
      bg="rgb(36,0,34);"
      bgGradient="linear-gradient(90deg, rgba(36,0,34,1) 0%, rgba(111,25,91,1) 41%, #701425 100%)"
      pb={6}
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <ButtonGroup position="absolute" top="10" left="10">
        <BrowserLink to="/" state={1}>
          <Button colorScheme="purple" size="lg" rounded="full">
            <ArrowBackIcon />
          </Button>
        </BrowserLink>
      </ButtonGroup>
      <Card bg="blackAlpha.600" color="white" borderRadius="3xl" maxW="700px">
        <CardHeader>
          <Heading size="md" textAlign="center" noOfLines={1}>
            {data.name}
          </Heading>
        </CardHeader>
        <Divider />
        <CardBody>
          <Image
            w="100%"
            h={48}
            objectFit="cover"
            src={src}
            borderRadius="lg"
          />

          <UnorderedList mt={4}>
            <ListItem>Model: {data.model}</ListItem>
            <ListItem>Hyperdrive Rating:{data.hyperdrive_rating} </ListItem>
            <ListItem>Passenger: {data.passengers}</ListItem>
            <ListItem>
              Max Athmospering Speed: {data.max_atmosphering_speed}
            </ListItem>
            <ListItem>Manufacturer: {data.manufacturer}</ListItem>
            <ListItem>Crew: {data.crew} </ListItem>
            <ListItem>Cargo Capacity: {data.cargo_capacity} </ListItem>
          </UnorderedList>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default DetailPage;
