import { Button } from '@chakra-ui/react'

type DetailsButtonProps = {
    btnColor?: string;
  };

  export function DetailsButton( {btnColor} : DetailsButtonProps) {
    console.log(btnColor)
    return (
        <Button
            bg={btnColor}
            variant='unstyled'
            color={"white"}
            w='100%'
            borderRadius="0 0 24px 24px"
        >
            Mais detalhes
        </Button>
    )
}

