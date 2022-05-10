import {
  Box,
  Button,
  Image,
  Badge,
  Stack,
  Flex,
  Spacer,
} from "@chakra-ui/react";

function ListingCard({
  imageUrl,
  imageAlt = "Roam placeholder image",
  name = "We couldn't find a name",
  price,
  startDate,
  endDate,
  key,
  buttonText,
  buttonBgColor,
  buttonTextColor,
  buttonClick,
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
              Dates
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              ml="2"
            >
              {startDate} - {endDate}
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

          <Flex>
            <Box>total: {price}</Box>
            <Spacer />
            <Box>
              <Button
                onClick={buttonClick}
                color={[{ buttonTextColor }]}
                bg={[{ buttonBgColor }]}
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
