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
  Divider,
  Checkbox,
  Center,
  Container,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import Link from 'next/link'

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
        <DrawerContent bgColor="gray.700">
          <DrawerCloseButton />
          <DrawerHeader>
            <Center color="white" fontWeight="bold" fontSize="2xl" p="12">
              Metodologia
            </Center>
          </DrawerHeader>

          <DrawerBody>
            <Divider />
            <Checkbox
              size="lg"
              p="4"
              color="white"
              fontWeight="bold"
              colorScheme="green"
            >
              <Link href="/day/1">Modulo 1</Link>
            </Checkbox>
            <Divider />
            <Checkbox
              size="lg"
              p="4"
              color="white"
              fontWeight="bold"
              colorScheme="green"
            >
              <Link href="/day/2">Modulo 2</Link>
            </Checkbox>
            <Divider />
            <Checkbox
              size="lg"
              p="4"
              color="white"
              fontWeight="bold"
              colorScheme="green"
            >
              <Link href="/day/3">Modulo 3</Link>
            </Checkbox>
            <Divider />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
