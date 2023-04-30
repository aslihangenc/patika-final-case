import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import images from '../constants/images.json';
import { Link as BrowserLink } from 'react-router-dom';
import { getShipId } from '../utils/functions';
const Ship = ({ data }) => {
  const src = images.find((item) => item.name === data.name).img;

  return (
    <Card bg="blackAlpha.600" color="white" borderRadius="3xl">
      <CardBody>
        <Image w="100%" h={48} objectFit="cover" src={src} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md" noOfLines={1}>
            {data.name}
          </Heading>
        </Stack>
        <Text fontSize="sm">Model: {data.model}</Text>
        <Text fontSize="sm">Hyperdrive Rating: {data.hyperdrive_rating}</Text>
      </CardBody>
      <CardFooter>
        <ButtonGroup w="100%" justifyContent="end">
          <BrowserLink to={getShipId(data.url)} state={1} >
            <Button colorScheme="purple" size="sm">
              <ArrowForwardIcon />
            </Button>
          </BrowserLink>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Ship;
