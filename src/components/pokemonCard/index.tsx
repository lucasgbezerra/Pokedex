import { Card, CardBody, CardFooter, Box, Text, Divider, ButtonGroup, Button, Stack, Heading, Image, Flex, Icon } from '@chakra-ui/react'
import { colors } from '../../styles/Colors'
import { PokemonType } from '../pokemonType'
import { pokemonTypes } from '../../styles/pokemonTypes'
import { PokemonInfo } from '../pokemonsInfo'
import { GiWeight, GiBodyHeight } from 'react-icons/gi'
import { DetailsButton } from '../button'

export function PokemonCard() {

  return (
    <Box w='400px' h='200px' bg='transparent' p='2' >
      <Card maxW='100%' bg={colors.background[15]}
        alignItems='center'
        borderRadius='24px'
        border={`1px solid ${colors.borderCard}`}
        overflow='hidden'
      >
        <CardBody p='0'>
          <Stack position="relative" w="auto" h="auto">
            <Box w='250px' h='250px'
              borderRadius="50%"
              filter="blur(150px)"
              bg={colors.green}
            />
            <Image
              src='../public/pokemon-img.png'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
            />

          </Stack>

          <Stack mt='24px' spacing='4px' align='center'>
            <Text fontSize='md' fontWeight='semibold' color={colors.white}>
              #001
            </Text>
            <Heading size='xl' fontWeight='bold' color={colors.white} >Bullbasaur</Heading>
          </Stack>
          {/* Add Ts pra gerar lista */}
          <Flex direction='row' align='center' gap='8px' justify='center' mt='12px' mb='24px'>
            <PokemonType name={pokemonTypes[2].name} color={pokemonTypes[2].color} />
            <PokemonType name={pokemonTypes[0].name} color={pokemonTypes[0].color} />
          </Flex>
          <Flex direction='row' align='center' gap='24px' justify='center' mb='24px'>
            <PokemonInfo
              type='Peso'
              measure='13 Kg'
              icon={<Icon as={GiWeight} color={colors.white} />}
            />
            <PokemonInfo
              type='Altura'
              measure='1 m'
              icon={<Icon as={GiBodyHeight} color={colors.white} />}
            />
          </Flex>
        </CardBody >
        <CardFooter p='0' w='100%' >
          <DetailsButton />
        </CardFooter>
      </Card >
    </Box >
  )
}