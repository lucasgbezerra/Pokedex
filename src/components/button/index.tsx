import { Button } from '@chakra-ui/react'

export function DetailsButton() {
    return (
        <Button
            bg={"purple.500"}
            variant='unstyled'
            color={"white"}
            w='100%'
            borderRadius="0 0 24px 24px"
        >
            Mais detalhes
        </Button>
    )
}

