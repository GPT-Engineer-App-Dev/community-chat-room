import { Box, Container, VStack, HStack, Text, Input, Button, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      setPosts([...posts, newPost]);
      setNewPost("");
    }
  };

  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.500" color="white" p={4}>
        <Container maxW="container.lg">
          <Heading as="h1" size="lg">Public Post Board</Heading>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={6}>
        <VStack spacing={6} align="stretch">
          {posts.length === 0 ? (
            <Text>No posts yet. Be the first to post!</Text>
          ) : (
            posts.map((post, index) => (
              <Box key={index} p={4} shadow="md" borderWidth="1px" borderRadius="md">
                <Text>{post}</Text>
              </Box>
            ))
          )}
        </VStack>
      </Container>

      {/* Post Form */}
      <Box as="footer" bg="gray.100" p={4} position="fixed" bottom="0" width="100%">
        <Container maxW="container.lg">
          <Flex as="form" onSubmit={(e) => { e.preventDefault(); handlePostSubmit(); }} align="center">
            <Input
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Write your post here..."
              mr={2}
            />
            <Button type="submit" colorScheme="blue">Post</Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;