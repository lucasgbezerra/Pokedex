import { Card, CardBody, CardFooter, Box, Text, Stack, Heading, Image, Flex, Icon } from '@chakra-ui/react'
import { colors } from '../../styles/Colors'
import { PokemonType } from '../pokemonType'
import { PokemonTypesMap } from '../../styles/pokemonTypes'
import { PokemonInfo } from '../pokemonsInfo'
import { GiWeight, GiBodyHeight } from 'react-icons/gi'
import { DetailsButton } from '../button'
import { useEffect,  useState } from 'react'
import {  getPokemon } from '../api/getPokemonList'
import { IPokemon } from '../../services/pokemon'

interface PokemonProps {
  url: string
}

export const PokemonCard = ({ url }: PokemonProps ) => {
  const [pokemonInfo, setPokemonInfo] = useState<IPokemon | null>(null)

  const getPokemonInfo = async () => {
    await getPokemon(url)
      .then((response) => setPokemonInfo(response))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting pokemon`);
      });
  };

  useEffect(() => {
    getPokemonInfo()
  }, [])

  const renderTypesBadges = () => {
    return pokemonInfo?.types?.map((type) => (<PokemonType name={type.type?.name} color={`${PokemonTypesMap.get(type?.type?.name)}`} />))
  }

  return (
    <Box w='400px' bg='transparent' p='2' margin="10px" >
      <Card maxW='100%'
        bgGradient='linear(to-t, orange.400, purple.200)'
        alignItems='center'
        borderRadius='24px'
        border={`1px solid ${colors.borderCard}`}
        overflow='hidden'
      >
        <CardBody p='0'>
          <Stack position="relative" w="auto" h="auto">
            <Box w='150px' h='150px'
              filter="blur(150px)"
            />
            {
              pokemonInfo &&
              <Image
                src={pokemonInfo?.sprites?.front_default}
                alt={pokemonInfo?.name}
                borderRadius='lg'
                position="absolute"
                left="50%"
                top="50%"
                transform="translate(-50%, -50%)"
                boxSize="150px"
                objectFit="cover"
              />
            }

          </Stack>

          <Stack mt='24px' spacing='4px' align='center'>
            <Text fontSize='md' fontWeight='semibold' color={colors.white}>
              #001
            </Text>
            <Heading size='xl' fontWeight='bold' color={colors.white} >{pokemonInfo?.name}</Heading>
          </Stack>
          <Flex direction='row' align='center' gap='8px' justify='center' mt='12px' mb='24px'>
          {pokemonInfo &&
              renderTypesBadges()
            }
          </Flex>
          <Flex direction='row' align='center' gap='24px' justify='center' mb='24px'>
            <PokemonInfo
              type='Peso'
              measure={`${pokemonInfo?.weight}`}
              icon={<Icon as={GiWeight} color={colors.white} />}
            />
            <PokemonInfo
              type='Altura'
              measure={`${pokemonInfo?.height}`}
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