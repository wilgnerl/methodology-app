import {
  Flex,
  IconButton,
  Spacer,
  Heading,
  Container,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import Link from 'next/link'

export default function Header({ isOpen }: any) {
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
          onClick={isOpen}
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
    </>
  )
}
