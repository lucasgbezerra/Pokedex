import { Box, Text, Flex, Image,  } from "@chakra-ui/react";
import {colors} from "../../styles/Colors"

interface PokemonTypeProps {
    name: string,
    color: string
}

export function PokemonType(props: PokemonTypeProps) {
    return (
        <Box
            bg={props.color}
            borderRadius='10px'
        >
            <Box py='4px' px='8px'>
                <Flex justify='center' alignItems='center'>
                    <Image src={`/icons/${props.name}.svg`} w="20px" h="20px" pr='8px'/>
                    <Text color={colors.white} >
                        {props.name}
                    </Text>
                </Flex>
            </Box>
        </Box>
    )
}