import { 
    Flex
} from '@chakra-ui/react';

export const CardForm = ({children}: any) => {

    return(
        <Flex flexDirection='column' width='30%' backgroundColor='#FFF' borderRadius='0.5rem' 
        padding='2rem' gap='1rem' boxShadow='15px 15px 30px -15px rgba(0,0,0,0.85)' marginTop='2rem'>
          {children}
        </Flex>
    )
}