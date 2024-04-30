import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading } from '@chakra-ui/react';

const CreateNote = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Create Note</Heading>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input placeholder="Note title" mb={4} />
        <FormLabel>Content</FormLabel>
        <Textarea placeholder="Note content" mb={4} />
        <FormLabel>Tags</FormLabel>
        <Input placeholder="Enter tags separated by commas" mb={4} />
        <Button colorScheme="blue">Submit</Button>
      </FormControl>
    </Box>
  );
};

export default CreateNote;