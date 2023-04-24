import { Button, ButtonGroup } from '@chakra-ui/react'
import { colors } from '../../styles/Colors'

export function DetailsButton() {
    return (
        <Button
            bg={colors.green}
            variant='unstyled'
            color={colors.white}
            w='100%'
            borderRadius="0 0 24px 24px"
        >
            Mais detalhes
        </Button>
    )
}

