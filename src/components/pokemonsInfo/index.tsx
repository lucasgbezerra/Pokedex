import { Stack, Flex, Text, Icon, Box } from '@chakra-ui/react'
import { colors } from '../../styles/Colors'

interface PokemonInfoProps {
    type: string,
    measure: string,
    icon: React.ReactNode;
}

export function PokemonInfo({ type, measure, icon }: PokemonInfoProps) {
    return (
        <Box>
            <Stack spacing={0} align='center'>
                <Flex direction='row' align='center' gap='8px'>
                    <>
                        {icon}
                    </>
                    <Text color={colors.white} fontWeight={'semibold'}>
                        {measure}
                    </Text>

                </Flex>
                <Text color={colors.white} fontWeight={'thin'}>
                    {type}
                </Text>
            </Stack>

        </Box>
    )
}

