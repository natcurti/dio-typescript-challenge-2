import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/Layout';
import Account from './pages/Account';
import { AppContextProvider } from './components/AppContext';

function App() {

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/conta/:id' element={<Account/>}/>
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>

  );
}

export default App;
