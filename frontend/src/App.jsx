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

const App = () => {
  //if route is deshboard nav not present
  const [user, setUser] = React.useState(true);
  return (
    <div className='light-background dark relative z-0'>
      <Router>
        {user && <Nav/>}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/deshboard' element={<Deshboard/>}></Route>
        </Routes>
      </Router>
      <LogIn/>
    </div>
  )
}

export default App
