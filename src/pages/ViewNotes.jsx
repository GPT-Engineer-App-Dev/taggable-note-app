import { Box, Text, VStack, Select, Heading } from '@chakra-ui/react';

const ViewNotes = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>View Notes</Heading>
      <Select placeholder="Filter by tags" mb={4}>
        {/* Options will be dynamically populated */}
      </Select>
      <VStack spacing={4} align="stretch">
        {/* Notes will be dynamically populated here */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Note Title</Heading>
          <Text mt={4}>Note content...</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default ViewNotes;