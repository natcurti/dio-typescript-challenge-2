import { Flex, Heading, Text } from "@chakra-ui/react";

interface IAccountInfo{
    mainContent: string,
    content: string,
    subContent: string
}

const AccountInfo = ({mainContent, content, subContent}: IAccountInfo) => {
    return(
        <Flex 
        backgroundColor='#FFF' 
        borderRadius='0.5rem'
        boxShadow='10px 10px 25px -10px rgba(0,0,0,0.85)'
        padding='2rem'
        minHeight='10rem'
        flexDirection='column'
        gap='1rem'
        justifyContent='center'
        alignItems='center'
        >
            <Heading as='h2' size='lg'>{mainContent}</Heading>
            <Text fontSize='1.25rem'>{content}</Text>
            <Text fontSize='1rem'>{subContent}</Text>           
        </Flex>
    )
}

export default AccountInfo;