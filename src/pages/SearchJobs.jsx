import { useState } from "react";
import { Box, Container, FormControl, FormLabel, Input, VStack, Button, Text } from "@chakra-ui/react";

const SearchJobs = ({ jobs }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter(job =>
    job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.jobDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Container maxW="container.md" py={10}>
      <Box bg="white" p={6} rounded="md" shadow="md">
        <VStack spacing={4}>
          <FormControl id="search" isRequired>
            <FormLabel>Search Jobs</FormLabel>
            <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter job title, company, or keywords" />
          </FormControl>
          <Button colorScheme="teal" size="lg" width="full">
            Search
          </Button>
        </VStack>
      </Box>
      <Box mt={10}>
        <Text fontSize="2xl" fontWeight="bold">Job Listings</Text>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <Box key={index} p={4} bg="gray.100" my={2} rounded="md">
              <Text fontSize="xl" fontWeight="bold">{job.jobTitle}</Text>
              <Text>{job.companyName}</Text>
              <Text>{job.location}</Text>
              <Text>{job.jobDescription}</Text>
            </Box>
          ))
        ) : (
          <Text>No job listings available.</Text>
        )}
      </Box>
    </Container>
  );
};

export default SearchJobs;