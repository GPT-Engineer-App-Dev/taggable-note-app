import { Box, Button, FormControl, FormLabel, Input, Heading } from '@chakra-ui/react';

const CreateTag = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Create Tag</Heading>
      <FormControl>
        <FormLabel>Tag Name</FormLabel>
        <Input placeholder="Enter tag name" mb={4} />
        <Button colorScheme="blue">Submit</Button>
      </FormControl>
    </Box>
  );
};

export default CreateTag;