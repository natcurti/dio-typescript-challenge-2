import { Header } from "./Header";
import { Flex } from '@chakra-ui/react';

const Layout = ({children}: any) => {
    return (
        <>
        <Header/>
        <Flex
            height="100vh"
            flexDirection="column"
            width="100%"
            backgroundColor="#4111A1"
            alignItems="center"
        >
            {children}
        </Flex>        
        </>        
    )
}

export default Layout;