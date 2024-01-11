import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import { 
  ChakraProvider,
  Flex
} from '@chakra-ui/react';

import { Header } from './components/Header';
import { CardForm } from './components/CardForm';

function App() {

  return (
    <ChakraProvider>
      <Flex height='100vh' flexDirection='column' width='100%' backgroundColor='#4111A1' alignItems='center'>
        <Header/>
        <CardForm/> 
      </Flex>
    </ChakraProvider>
  );
}

export default App;
