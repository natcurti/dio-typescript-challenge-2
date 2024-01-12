import {
    Flex,
    Heading,
    List,
    ListItem,
    Link,
    Button
} from '@chakra-ui/react';
import { AppContext } from './AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);
    const navigate = useNavigate();

    const logout = () => {
        setIsLoggedIn(false);
        navigate('/')
    }

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
                    {isLoggedIn ? <ListItem><Button onClick={() => logout()}>Sair</Button></ListItem> : null}
                </Flex>
            </List>
        </Flex>
    )
}