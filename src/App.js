import { Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import Login from "./pages/Login/Login";
import Auth from './pages/Login/Auth';
import CompleteAuth from './pages/Login/CompleteAuth';
import Layout from './components/layout';

import Mainpage from "./pages/MainPage/mainpage"
import Popular from "./pages/MainPage/Popular";  // 인기 바탕화면
import Category from "./pages/MainPage/Category"; //카테고리
import Category_Popular from "./pages/MainPage/Category_Popular"; //인기 카테고리

import Download from './pages/UserPage/Donwload';
import UserProfile from './pages/UserPage/UserProfile';
import Modal from './components/Profile/Modal';
import Upload from './pages/Upload/Upload';

import Myinfo from './pages/MyPage/Myinfo';
import MyPosts from "./pages/MyPage/MyPosts";
import LikePosts from "./pages/MyPage/LikePosts";
import MyInfoModify from "./pages/MyPage/MyInfoModify";
import NotFound from './pages/NotFound';
import HelpDesk from './pages/HelpDesk';
// 수정: 로그인  / 라우팅 > mainpage /mainpage 로 라우팅 수정


function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path='/' element={<Mainpage/>}/> */}

          <Route path='/main' element={<Mainpage/>}/>
          <Route path='/Category' element={<Category/>}/>
          <Route path='/Popular' element={<Popular/>}/>
          <Route path='/Category_Popular' element={<Category_Popular/>}/>

          <Route path='/' element={<Login/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/authcomplete' element={<CompleteAuth/>}/>
          <Route path='/download/:postid' element={<Download/>}/>
          <Route path='/profile/:userid' element={<UserProfile/>}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/myinfo' element={<Myinfo/>}/>
          <Route path='/myinfomodify' element={<MyInfoModify/>}/>
          <Route path='/myposts' element={<MyPosts/>}/>
          <Route path='/likeposts' element={<LikePosts/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/helpdesk' element={<HelpDesk/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;