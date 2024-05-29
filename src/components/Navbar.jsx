import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2} color="white">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          JobSite
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/post-job" px={2}>
            Post a Job
          </Link>
          <Link as={RouterLink} to="/search-jobs" px={2}>
            Search Jobs
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;