import { useContext } from 'react';
import Account from './pages/Account';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { AppContext } from './components/AppContext';

const MainRoutes = () => {
    const {isLoggedIn} = useContext(AppContext)
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/conta/:id' element={isLoggedIn ? <Account/> : <Home/>}/>
        </Routes>
    )
}

export default MainRoutes;