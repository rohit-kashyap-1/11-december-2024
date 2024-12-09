import logo from './logo.svg';
import './App.css';
import ClickEvent from './components/ClickEvent';
import ChangeEvent from './components/ChangeEvent';
import Profile from './components/Profile';
import { use, useState } from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  //prop drilling
  const [isLogin,setIsLogin] = useState(false)
  
  
  return (
   <>
    {/* <Profile /> */}
    {(isLogin===true)?<Dashboard />:<Login isLogin={isLogin} setIsLogin={setIsLogin} />}

   </>
  );
}

export default App;
