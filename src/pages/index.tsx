import {
  Box,
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Checkbox,
} from '@chakra-ui/react'
import Image from 'next/image'
import imageUrl from '../assets/logo.jpg'
import { cms } from '@/lib/cms'
import { v4 as uuidV4 } from 'uuid'
import Link from 'next/link'
import Header from '@/components/Header'

export default function Home({ ids }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Header isOpen={onOpen} />
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
            <Accordion allowToggle color="white">
              {ids.map((item: any) => {
                return (
                  <AccordionItem key={uuidV4()}>
                    <h2>
                      <AccordionButton>
                        <AccordionIcon />
                        <Box as="span" flex="1" textAlign="left">
                          <strong>{item.moduleName}</strong>
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Accordion allowMultiple>
                        <h2>
                          {item.data
                            .slice(0)
                            .reverse()
                            .map((dataContent: any) => {
                              // console.log(typeof dataContent.content)
                              return (
                                <AccordionItem key={uuidV4()}>
                                  <AccordionButton>
                                    <AccordionIcon />
                                    <Box
                                      as="span"
                                      flex="1"
                                      textAlign="left"
                                      fontSize="sm"
                                    >
                                      <strong>{dataContent.weekName}</strong>
                                    </Box>
                                  </AccordionButton>

                                  {dataContent.content.map((x: any) => {
                                    // console.log(x)
                                    return (
                                      <AccordionPanel pb={4} key={uuidV4()}>
                                        <Checkbox
                                          pt={1}
                                          pb={1}
                                          pl={8}
                                          size="md"
                                          colorScheme="green"
                                          key={uuidV4()}
                                          flex="1"
                                        >
                                          <Link href={`/day/${x.id}`}>
                                            <Text>
                                              {x.text.children[0].text}
                                            </Text>
                                          </Link>
                                        </Checkbox>
                                      </AccordionPanel>
                                    )
                                  })}
                                </AccordionItem>
                              )
                            })}
                        </h2>
                      </Accordion>
                    </AccordionPanel>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
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
    </>
  )
}

export async function getServerSideProps() {
  try {
    const ids = await cms.fetch(`*[_type=="content"]`)
    const transformedData: any = {}

    ids.forEach((item: any) => {
      const moduleName = item.moduleName
      const weekName = item.weekName
      const content = { text: item.WeekInfo[0], id: item._id }

      if (!transformedData[moduleName]) {
        transformedData[moduleName] = { moduleName, data: [] }
      }

      const existingWeek = transformedData[moduleName].data.find(
        (w: any) => w.weekName === weekName,
      )

      if (existingWeek) {
        existingWeek.content.push(content)
      } else {
        transformedData[moduleName].data.push({
          weekName,
          content: [content],
        })
      }
    })
    // Ordena os dados da semana primeiro por 'weekName' e depois por 'text.children[0].text'
    Object.values(transformedData).forEach((module: any) => {
      module.data.forEach((week: any) => {
        week.content.sort((a: any, b: any) =>
          a.text.children[0].text.localeCompare(b.text.children[0].text),
        )
      })
    })

    const result = Object.values(transformedData)
    return {
      props: {
        ids: result,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: { data: null },
      notFound: true,
    }
  }
}
