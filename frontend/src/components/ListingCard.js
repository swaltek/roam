import {
  Box,
  Button,
  Image,
  Badge,
  Stack,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { AiFillStar } from "react-icons/ai";

function ListingCard({
  imageUrl,
  imageAlt = "Roam placeholder image",
  name = "We couldn't find a name",
  price,
  key,
  buttonText = "Click Me",
  buttonClick,
  rating,
  is_boondock,
  nearPark,
}) {
  return (
    <Box
      key={key}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={imageUrl} alt={imageAlt} />
      <Box p="6">
        <Stack>
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {{ is_boondock } ? "BoonDock" : "Roam Listing"}
              Dates
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              ml="2"
            >
              Nearest Park: {nearPark}
            </Box>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <AiFillStar
                  key={i}
                  color={i < { rating } ? "teal.500" : "gray.300"}
                />
              ))}
          </Box>

          <Flex>
            <Box>price: {price}</Box>
            <Spacer />
            <Box>
              <Button
                onClick={buttonClick}
                color={["white"]}
                bg={["primary.500"]}
              >
                {buttonText}
              </Button>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}

export default ListingCard;
