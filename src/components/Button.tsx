import {
    Button
} from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

interface IButton{
    title: string
    onClickFunction: MouseEventHandler
}

export const SendButton = ({title, onClickFunction} : IButton) => {
    return(
        <Button onClick={onClickFunction} backgroundColor='#E33F84' _hover={{ bg: '#ff87b9' }} color='#FFF' 
        fontFamily="'Open Sans', sans-serif" fontWeight='700'>
            {title}
        </Button>
    )
}