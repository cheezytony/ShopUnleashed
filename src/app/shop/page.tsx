import React from "react";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "next/link";

const ShopPage: React.FC = () => {
  return (
    <Box p={5} display="flex" flexDirection="column" alignItems="center">
      <Heading mb={4}>Welcome to the Shop</Heading>
      <Text mb={6}>Browse through our collection of products and add them to your cart.</Text>
      <Stack direction="column" spacing={4}>
        <Link to="/product">
          <Button colorScheme="teal" size="lg">
            View Products
          </Button>
        </Link>
        <Link to="/cart">
          <Button colorScheme="blue" size="lg">
            Go to Cart
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default ShopPage;
