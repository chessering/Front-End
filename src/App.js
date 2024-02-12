import { Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import Login from "./pages/Login/Login";
import Auth from './pages/Login/Auth';
import CompleteAuth from './pages/Login/CompleteAuth';
import Layout from './components/layout';
import Mainpage from "./pages/MainPage/mainpage"

import Download from './pages/UserPage/Donwload';
import UserProfile from './pages/UserPage/UserProfile';
import Modal from './components/Profile/Modal';
import Upload from './pages/Upload/Upload';


function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div>
      <Routes location={background || location}>
      <Route element={<Layout />}>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/authcomplete' element={<CompleteAuth/>}/>
        <Route path='/download' element={<Download/>}/>
        <Route path='/profile/:userid' element={<UserProfile/>}/>
        <Route path='/upload' element={<Upload/>}/>
      </Route>
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