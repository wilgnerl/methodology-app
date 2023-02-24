import {
  Flex,
  IconButton,
  Spacer,
  Heading,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center,
  Container,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import Link from 'next/link'
import MenuItem from '../MenuItem'

const data = {
  modulo1: {
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
  modulo2: {
    numberOfModule: 2,
    nameOfModule: 'Módulo Senso de Controle e Estratégias:',
    weekInfo: [
      {
        dayOfWeek: 1,
        nameOfWeek: 'Senso de Controle e Estratégias:',
        classInfo: [
          {
            dayOfClass: 1,
            nameOfClass: 'Introdução ao módulo',
          },
          {
            dayOfClass: 2,
            nameOfClass: 'O coletivo importa ',
          },
          {
            dayOfClass: 3,
            nameOfClass: 'Chegando onde queremos e o ouriço da organização',
          },
          {
            dayOfClass: 4,
            nameOfClass: 'Direcionamento e clareza',
          },
          {
            dayOfClass: 5,
            nameOfClass: 'Definição - Dê nome aos bois.',
          },
          {
            dayOfClass: 6,
            nameOfClass: 'Final Mapping e Estruturação',
          },
        ],
      },
    ],
  },
}

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex w="100%" p="12" bgColor="orange.600">
        <IconButton
          aria-label=""
          bgColor="transparent"
          color="white"
          variant="solid"
          fontSize="30px"
          ml="16"
          colorScheme="teal"
          onClick={onOpen}
        >
          <HamburgerIcon />
        </IconButton>
        <Spacer />
        <Link href="/">
          <Container>
            <Heading color="white" fontSize="3xl" mr="16" fontWeight="light">
              claire.
            </Heading>
            <Text color="white">Evite burnout e desengajamento</Text>
          </Container>
        </Link>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="orange.600">
          <DrawerCloseButton />
          <DrawerHeader>
            <Center
              color="white"
              fontWeight="bold"
              fontSize="2xl"
              pt="12"
              pl="12"
              pr="12"
            >
              Metodologia
            </Center>
          </DrawerHeader>

          <DrawerBody>
            <MenuItem
              numberOfModule={data.modulo1.numberOfModule}
              nameOfModule={data.modulo1.nameOfModule}
              weekInfo={data.modulo1.weekInfo}
            />
            <MenuItem
              numberOfModule={data.modulo2.numberOfModule}
              nameOfModule={data.modulo2.nameOfModule}
              weekInfo={data.modulo2.weekInfo}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
