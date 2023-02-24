import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'

import { v4 as uuidV4 } from 'uuid'

interface Class {
  dayOfClass: number
  nameOfClass: string
}

interface Week {
  dayOfWeek: number
  nameOfWeek: string
  classInfo: Class[]
}

interface MenuItemProps {
  numberOfModule: number
  nameOfModule: string
  weekInfo: Week[]
}

export default function MenuItem({
  weekInfo,
  numberOfModule,
  nameOfModule,
}: MenuItemProps) {
  return (
    <Accordion allowToggle color="white">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <AccordionIcon />
            <Box as="span" flex="1" textAlign="left">
              <strong>Modulo {numberOfModule}</strong> - {nameOfModule}
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} key={uuidV4()}>
          {weekInfo.map((week) => {
            return (
              <Accordion key={uuidV4()} allowToggle>
                <AccordionItem>
                  <AccordionButton>
                    <AccordionIcon />
                    <Box as="span" flex="1" textAlign="left" fontSize="sm">
                      <strong>Semana {week.dayOfWeek}</strong> -{' '}
                      {week.nameOfWeek}
                    </Box>
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    {week.classInfo.map((item) => {
                      return (
                        <Checkbox
                          pt={1}
                          pb={1}
                          pl={8}
                          size="md"
                          colorScheme="green"
                          key={uuidV4()}
                        >
                          <Link href={`/day/${item.dayOfClass}`}>
                            <Text fontSize="sm">
                              <strong>Dia {item.dayOfClass}</strong> -{' '}
                              {item.nameOfClass}
                            </Text>
                          </Link>
                        </Checkbox>
                      )
                    })}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            )
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
