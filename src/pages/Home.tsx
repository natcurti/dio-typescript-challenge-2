import { CardForm } from '../components/CardForm';
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
import { SendButton } from '../components/Button';
import { login } from '../services/login';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';

const Home = () => {
  const [email, setEmail] = useState<string>(''); 
  const {setIsLoggedIn} = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email:string) => {
    const loggedIn = await login(email);

    if(!loggedIn){
      alert('Email inválido');
    }
    setIsLoggedIn(true);
    navigate('/conta/1')
  }



  return (
    <CardForm>
      <Heading
        as="h2"
        color="#112D43"
        fontSize="2rem"
        fontWeight="700"
        fontFamily="'Open Sans', sans-serif"
      >
        Login:
      </Heading>
      {/* {(userData === null || userData === undefined) ? <h2>Loading....</h2> : <h2>Informações Carregadas</h2>} */}
      {/* <Text>{userData?.name}</Text>*/}
      <Text
        color="#A1A1A3"
        fontFamily="'Open Sans', sans-serif"
        fontSize="1rem"
      >
        Digite seus dados nos campos abaixo.
      </Text>
      <Flex
        flexDirection="column"
        gap="0.5rem"
        fontFamily="'Open Sans', sans-serif"
        fontWeight="700"
      >
        <label htmlFor="inputEmail">Email: </label>
        <InputGroup size="lg" fontWeight="400">
          <Input
            color="#112D43"
            fontSize="1rem"
            placeholder="Digite seu email"
            _placeholder={{ color: "#A1A1A3", fontSize: "1rem" }}
            id="inputEmail"
            value={email}
            onChange={(event: any) => setEmail(event.target.value)}
          />
          <InputRightElement pointerEvents="none">
            <EmailIcon color="#112D43" />
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Flex
        flexDirection="column"
        gap="0.5rem"
        fontFamily="'Open Sans', sans-serif"
        fontWeight="700"
      >
        <label htmlFor="inputPassword">Senha:</label>
        <InputGroup size="lg" fontWeight="400">
          <Input
            color="#112D43"
            fontSize="1rem"
            placeholder="Digite sua senha"
            _placeholder={{ color: "#A1A1A3", fontSize: "1rem" }}
            id="inputPassword"
          />
          <InputRightElement pointerEvents="none">
            <LockIcon color="#112D43" />
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Link color="#A1A1A3" fontFamily="'Open Sans', sans-serif" href="#">
        Esqueci minha senha
      </Link>
      <SendButton
        title="Enviar"
        onClickFunction={() => {
          validateUser(email);
        }}
      />
    </CardForm>
  );
};

export default Home;
