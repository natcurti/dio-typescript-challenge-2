import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/Layout';
import { AppContextProvider } from './components/AppContext';
import MainRoutes from './routes';

function App() {
  
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes/>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>

  );
}

export default App;
