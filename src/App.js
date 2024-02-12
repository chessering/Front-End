import { Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import Layout from './components/layout';
import Login from "./pages/Login/Login";
import Auth from './pages/Login/Auth';
import CompleteAuth from './pages/Login/CompleteAuth';

import Download from './pages/Donwload';
import UserProfile from './pages/UserProfile';
import Modal from './components/Profile/Modal';

import Mainpage from './pages/mainpage';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/authcomplete' element={<CompleteAuth/>}/>
      </Routes>
      {background && (
        <Routes>
          <Route path='/profile/:userid/followers' element={<Modal title='팔로워'/>}/>
          <Route path='/profile/:userid/following' element={<Modal title='팔로잉'/>}/>
        </Routes>
      )}
    </div>
  );
}

export default App;