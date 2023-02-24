import { AspectRatio, Container, Heading, Text } from '@chakra-ui/react'
// import { useRouter } from 'next/router'

const data = {
  aula1: {
    numberOfModule: 1,
    nameOfModule: 'Crenças, Valores e Visões de Longo Prazo',
    weekInfo: [
      {
        dayOfWeek: 1,
        nameOfWeek: 'Crença e valores',
        classInfo: [
          {
            dayOfClass: 1,
            nameOfClass: 'O início da (re)modelagem das crenças e valores',
          },
          {
            dayOfClass: 2,
            nameOfClass: 'Valores',
          },
          {
            dayOfClass: 3,
            nameOfClass: 'Reprogramando Crenças ',
          },
          {
            dayOfClass: 4,
            nameOfClass: 'Revendo Crenças ',
          },
        ],
      },
      {
        dayOfWeek: 2,
        nameOfWeek: 'Visões de Longo Prazo e como projetá-las. ',
        classInfo: [
          {
            dayOfClass: 1,
            nameOfClass:
              'Já sabemos quem somos, agora entenderemos o que queremos para a nossa vida.',
          },
          {
            dayOfClass: 2,
            nameOfClass: 'A realidade começa na mente',
          },
          {
            dayOfClass: 3,
            nameOfClass: 'Orientação tempo e espaço para concretização',
          },
          {
            dayOfClass: 4,
            nameOfClass: 'Metas relevantes para esse ano',
          },
          {
            dayOfClass: 5,
            nameOfClass: 'Metas principais e recursos necessários',
          },
          {
            dayOfClass: 6,
            nameOfClass: 'Impedimentos',
          },
          {
            dayOfClass: 7,
            nameOfClass: 'MoodBoard e planejamento para modelagem ',
          },
        ],
      },
    ],
  },
}

export default function Day1() {
  // const router = useRouter()
  // const { day } = router.query

  return (
    <Container p="12" width="100%">
      <Heading fontSize="2xl" mt="5" mb="5">
        Módulo {data.aula1.numberOfModule} - {data.aula1.nameOfModule}:
      </Heading>
      <AspectRatio width="100%" ratio={2} mb="10">
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/ufXYbsIQ-LI"
          allowFullScreen
        />
      </AspectRatio>
      <Heading textAlign="left" fontSize="lg">
        Dia {data.aula1.weekInfo[0].classInfo[0].dayOfClass} -{' '}
        {data.aula1.weekInfo[0].classInfo[0].nameOfClass}
      </Heading>
      <Text textAlign="justify" mt="4">
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
