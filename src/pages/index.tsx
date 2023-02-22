import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import imageUrl from '../assets/logo.jpg'
export default function Home() {
  return (
    <Box>
      <Container p="4">
        <Center>
          <Image src={imageUrl} alt="" width={800} height={200} />
        </Center>
        <Heading textAlign="center" color="orange.600" mt="6">
          Bem vindo a Metodologia Claire
        </Heading>
        <Text
          textAlign="center"
          mt="6"
          fontSize="xl"
          color="orange.600"
          fontWeight="bold"
        >
          Clique no menu lateral para ver as aulas
        </Text>
      </Container>
    </Box>
  )
}
