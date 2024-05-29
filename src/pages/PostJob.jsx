import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";

const PostJob = ({ addJob }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = () => {
    const newJob = {
      jobTitle,
      companyName,
      location,
      jobDescription,
    };
    addJob(newJob);
    setJobTitle("");
    setCompanyName("");
    setLocation("");
    setJobDescription("");
  };
  return (
    <Container maxW="container.md" py={10}>
      <Box bg="white" p={6} rounded="md" shadow="md">
        <VStack spacing={4}>
          <FormControl id="job-title" isRequired>
            <FormLabel>Job Title</FormLabel>
            <Input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Enter job title" />
          </FormControl>
          <FormControl id="company-name" isRequired>
            <FormLabel>Company Name</FormLabel>
            <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Enter company name" />
          </FormControl>
          <FormControl id="location" isRequired>
            <FormLabel>Location</FormLabel>
            <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter job location" />
          </FormControl>
          <FormControl id="job-description" isRequired>
            <FormLabel>Job Description</FormLabel>
            <Textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} placeholder="Enter job description" />
          </FormControl>
          <Button onClick={handleSubmit} colorScheme="blue" size="lg" width="full">
            Submit Job
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default PostJob;