import { AspectRatio, Container, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Day1() {
  const router = useRouter()
  const { day } = router.query

  return (
    <Container p="12" width="100%">
      <Heading textAlign="center" mt="5" mb="5">
        Dia {day}
      </Heading>
      <AspectRatio width="100%" ratio={2} mb="10">
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/jzIZUzNyZvQ"
          allowFullScreen
        />
      </AspectRatio>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis
        voluptate reiciendis, repellendus alias adipisci magni nostrum unde
        quos, error, libero ullam culpa quasi quaerat porro eveniet rem
        doloremque. Aperiam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Error odio sint, distinctio dolores alias aperiam dolore veniam
        sapiente eaque fugiat. Atque, sed consequuntur. Odio voluptatem commodi
        error exercitationem aut impedit!
      </Text>
    </Container>
  )
}
