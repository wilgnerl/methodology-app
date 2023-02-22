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
          src="https://www.youtube.com/embed/ufXYbsIQ-LI"
          allowFullScreen
        />
      </AspectRatio>
      <Heading>Módulo 1:</Heading>
      <Text>
        Ao iniciar cada Módulo (que terão duração de duas semanas), recomenda-se
        seguir as agendas diárias e o formato que a metodologia é aplicada. A
        agenda não seguirá uma ordem cronológica diária, portanto para cada
        prática será direcionado o tempo para auto-reflexão e aplicação. É
        importante lembrá-los da importância de responder os questionários com
        seriedade para que os objetivos sejam atingidos. A cada vídeo publicado,
        será disponibilizado um arquivo para acompanhamento individual.
      </Text>
    </Container>
  )
}
