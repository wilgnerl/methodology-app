import { cms } from '@/lib/cms'
import { v4 as uuidV4 } from 'uuid'

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Box,
  Center,
  Checkbox,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Header from '@/components/Header'
import Link from 'next/link'
// import { useRouter } from 'next/router'

export default function Day({ content, contents }: any) {
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
              {contents.map((item: any) => {
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
      <Container p="12" width="100%">
        <Heading fontSize="2xl" mt="5" mb="5">
          {/* {content[0].moduleName} - {content[0].nameOfModule} */}
        </Heading>
        <AspectRatio width="100%" ratio={2} mb="10">
          <iframe
            title="video"
            src="https://www.youtube.com/embed/ufXYbsIQ-LI"
            allowFullScreen
          />
        </AspectRatio>
        {content[0].WeekInfo.map((data: any) => {
          if (
            data.style === 'h1' ||
            data.style === 'h2' ||
            data.style === 'h3'
          ) {
            return (
              <Heading key={uuidV4()} mt={3} as="h2">
                {data.children[0].text}
              </Heading>
            )
          } else {
            return (
              <div key={uuidV4()}>
                {data.children.map((children: any) => {
                  if (
                    children.marks.length > 0 &&
                    children.marks[0] === 'strong'
                  ) {
                    return (
                      <Text
                        mt={4}
                        key={uuidV4()}
                        textAlign="justify"
                        fontWeight="bold"
                      >
                        {children.text}
                      </Text>
                    )
                  }
                  return (
                    <Text key={uuidV4()} textAlign="justify" mt={2}>
                      {children.text}
                    </Text>
                  )
                })}
              </div>
            )
          }
        })}
      </Container>
    </>
  )
}

export async function getServerSideProps({ params }: any) {
  try {
    const ids = await cms.fetch(`*[_type=="content"]`)
    const id = params.day
    const query = `*[_id=="${id}"]`
    const responseData = await cms.fetch(query)

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
        content: responseData,
        contents: result,
      },
    }
  } catch (error) {
    return {
      props: { data: null },
      revalidate: 30,
      notFound: true,
    }
  }
}
