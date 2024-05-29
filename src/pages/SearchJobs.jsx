import { Box, Container, FormControl, FormLabel, Input, VStack, Button, Text } from "@chakra-ui/react";

const SearchJobs = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Box bg="white" p={6} rounded="md" shadow="md">
        <VStack spacing={4}>
          <FormControl id="search" isRequired>
            <FormLabel>Search Jobs</FormLabel>
            <Input placeholder="Enter job title, company, or keywords" />
          </FormControl>
          <Button colorScheme="teal" size="lg" width="full">
            Search
          </Button>
        </VStack>
      </Box>
      <Box mt={10}>
        <Text fontSize="2xl" fontWeight="bold">Job Listings</Text>
        {/* Placeholder for job listings */}
        <Text>No job listings available.</Text>
      </Box>
    </Container>
  );
};

export default SearchJobs;