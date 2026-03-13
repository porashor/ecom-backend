import React from 'react'
import Nav from './component/Nav'
import "swiper/css";
import MainBanner from './component/MainBanner';
import Headline from './component/Headline';
import SaleBoard from './component/SaleBoard';
import MainCatagory from './component/MainCatagory';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './page/Home';
import Deshboard from './page/Deshboard';
import LogIn from './component/LogIn';
import SignIn from './component/SignIn';
import Account from './page/Account';
const App = () => {
  //if route is deshboard nav not present
  const [user, setUser] = React.useState(true);
  const [isLogIn, setIsLogIn] = React.useState(8);
  const path = window.location.pathname === '/deshboard' ;
  console.log(window.location.pathname);
  return (
    <div className='light-background dark relative z-0'>
      <Router>
        {!path && <Nav setIsLogIn={setIsLogIn}/>}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/deshboard' element={<Deshboard/>}></Route>
          <Route path='/user' element={<Account/>}></Route>
        </Routes>
      </Router>
      {isLogIn === 0 && <LogIn setIsLogIn={setIsLogIn}/>}
      {isLogIn === 1 && <SignIn setIsLogIn={setIsLogIn}/>}
    </div>
  )
}

export default App
