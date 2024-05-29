import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";

const PostJob = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Box bg="white" p={6} rounded="md" shadow="md">
        <VStack spacing={4}>
          <FormControl id="job-title" isRequired>
            <FormLabel>Job Title</FormLabel>
            <Input placeholder="Enter job title" />
          </FormControl>
          <FormControl id="company-name" isRequired>
            <FormLabel>Company Name</FormLabel>
            <Input placeholder="Enter company name" />
          </FormControl>
          <FormControl id="location" isRequired>
            <FormLabel>Location</FormLabel>
            <Input placeholder="Enter job location" />
          </FormControl>
          <FormControl id="job-description" isRequired>
            <FormLabel>Job Description</FormLabel>
            <Textarea placeholder="Enter job description" />
          </FormControl>
          <Button colorScheme="blue" size="lg" width="full">
            Submit Job
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default PostJob;