import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Welcome to JobSite</Text>
        <Text fontSize="xl">Your one-stop destination for job postings and job searches.</Text>
        <Button as={RouterLink} to="/post-job" colorScheme="blue" size="lg">
          Post a Job
        </Button>
        <Button as={RouterLink} to="/search-jobs" colorScheme="teal" size="lg">
          Search Jobs
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;