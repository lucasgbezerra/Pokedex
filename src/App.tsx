import { colors } from './styles/Colors';
import { Box } from '@chakra-ui/react'
import { PokemonCard } from './components/pokemonCard';



export function App() {

  return (
    <div>
      <Box
        bg={colors.background[100]}
        minH="100vh"
        w="100vw"
        position="fixed"
        top="0"
        left="0"
      >
        <Box my="5%" mx="10%">
          <PokemonCard />
        </Box>
      </Box>
    </div>
  )
}