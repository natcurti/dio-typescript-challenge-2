import { 
    Flex, 
    Text,
    Input,
    InputRightElement,
    InputGroup,
    Link,
    Heading
} from '@chakra-ui/react';
import {EmailIcon, LockIcon} from '@chakra-ui/icons';
import { SendButton } from './Button';
import { login } from '../services/login';
import { useState } from 'react';

export const CardForm = () => {
    const [email, setEmail] = useState<string>(''); 

    return(
        <Flex flexDirection='column' width='30%' backgroundColor='#FFF' borderRadius='0.5rem' 
        padding='2rem' gap='1rem' boxShadow='15px 15px 30px -15px rgba(0,0,0,0.85)' marginTop='2rem'>
          <Heading as='h2' color='#112D43' fontSize='2rem' fontWeight='700' fontFamily="'Open Sans', sans-serif">
            Login:
          </Heading>
          {/* {(userData === null || userData === undefined) ? <h2>Loading....</h2> : <h2>Informações Carregadas</h2>} */}
          {/* <Text>{userData?.name}</Text>*/}
          <Text color='#A1A1A3' fontFamily="'Open Sans', sans-serif" fontSize='1rem'>
            Digite seus dados nos campos abaixo.
          </Text>
          <Flex flexDirection='column' gap='0.5rem' fontFamily="'Open Sans', sans-serif" fontWeight='700'>
            <label htmlFor='inputEmail'>Email: </label>
            <InputGroup size='lg' fontWeight='400'> 
              <Input color='#112D43' fontSize='1rem' placeholder="Digite seu email" 
              _placeholder={{color: '#A1A1A3', fontSize:'1rem' }} id='inputEmail'
              value={email} onChange={(event: any) => setEmail(event.target.value)}
              />
              <InputRightElement pointerEvents="none">
                <EmailIcon color='#112D43'/>
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex flexDirection='column' gap='0.5rem' fontFamily="'Open Sans', sans-serif" fontWeight='700'>
            <label htmlFor='inputPassword'>Senha:</label>
            <InputGroup size='lg' fontWeight='400'>
              <Input color='#112D43' fontSize='1rem' placeholder="Digite sua senha"  _placeholder={{color: '#A1A1A3', fontSize:'1rem' }} id='inputPassword'/>
              <InputRightElement pointerEvents="none">
              <LockIcon color='#112D43'/>
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Link color='#A1A1A3' fontFamily="'Open Sans', sans-serif" href='#'>Esqueci minha senha</Link>
          <SendButton title='Enviar' onClickFunction={() => {login(email)}}/>
        </Flex>
    )
}