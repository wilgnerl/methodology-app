import { Box, Container, Heading, Text } from '@chakra-ui/react'
export default function Home() {
  return (
    <Box>
      <Container p="12">
        <Heading textAlign="center">Bem vindo a Metodologia da Claire</Heading>
        <Text textAlign="center" mt="6" fontSize="xl">
          Clique no menu lateral para ver as aulas
        </Text>
      </Container>
    </Box>
  )
}
