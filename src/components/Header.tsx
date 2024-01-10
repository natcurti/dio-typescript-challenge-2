import {
    Flex,
    Heading,
    List,
    ListItem,
    Link
} from '@chakra-ui/react';

export const Header = () => {
    return(
        <Flex height='5rem' padding='1rem' justifyContent='space-between' alignItems='center' 
        backgroundColor='#081534' width='100%'>
            <Heading as='h1' size='lg' fontFamily="'Open Sans', sans-serif" color='#FFF'>
                DIO Bank
            </Heading>
            <List color='#FFF'>
                <Flex gap='1rem'>
                    <ListItem><Link>Home</Link></ListItem>
                    <ListItem><Link>Sobre Nós</Link></ListItem>
                    <ListItem><Link>Serviços</Link></ListItem>
                    <ListItem><Link>Contato</Link></ListItem>
                </Flex>
            </List>
        </Flex>
    )
}