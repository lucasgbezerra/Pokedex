import { Box, Text } from "@chakra-ui/react"

export const ErrorMessage = () => {
    return (
        <Box maxW='21rem' h='3.rem'
            bg='linear-gradient(180deg, #151a37 0%, rgba(21, 26, 55, 0) 100%)'
            border='1px solid #24293f'
            borderRadius='0.5rem'
            margin='0 auto'
            display='flex'
            justifyContent='center'
            alignItems='center'
            gap='0.5rem'
        >
            <Text fontSize='1rem' lineHeight='300%' fontWeight='700' color='#ffffff'>
                Ops, Pokémon não encontrado!
            </Text>
        </Box>
    )
}