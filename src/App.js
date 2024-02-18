import { Route, Routes } from 'react-router-dom';
import './index.css';
import Login from "./pages/Login/Login";
import Auth from './pages/Login/Auth';
import CompleteAuth from './pages/Login/CompleteAuth';
import Layout from './components/layout';
import LoginLayout from './components/loginlayout'; // 컴포넌트 이름은 대문자로 시작해야 합니다.
import Mainpage from "./pages/MainPage/mainpage";
import Popular from "./pages/MainPage/Popular";
import Category from "./pages/MainPage/Category";
import Category_Popular from "./pages/MainPage/Category_Popular";

import Download from './pages/UserPage/Donwload';
import UserProfile from './pages/UserPage/UserProfile';
import Modal from './components/Profile/Modal';
import Upload from './pages/Upload/Upload';

import Myinfo from './pages/MyPage/Myinfo';
import MyPosts from "./pages/MyPage/MyPosts";
import LikePosts from "./pages/MyPage/LikePosts";
import MyInfoModify from "./pages/MyPage/MyInfoModify";
import About from "./pages/About";
import NotFound from './pages/NotFound';
import HelpDesk from './pages/HelpDesk';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import { useRecoilState } from 'recoil';
import { loadingState } from './recoil/atom';

function App() {
  const [isLoading, setIsLoading] = useRecoilState(loadingState);

  return (
    <div>
      {(isLoading)&& <Loader/>}
      <ScrollToTop/>
      <Routes>
        {/* 로그인 페이지에만 HeaderLayout 적용 */}
        <Route path='/' element={<LoginLayout />}>
        <Route path='auth' element={<Auth/>}/>
        <Route path='authcomplete' element={<CompleteAuth/>}/>
          <Route index element={<Login/>}/>

        </Route>


        {/* 나머지 페이지에는 Layout 적용 */}
        <Route path='/' element={<Layout />}>
          <Route path='main' element={<Mainpage/>}/>
          <Route path='Category/:postid' element={<Category/>}/>
          <Route path='Popular' element={<Popular/>}/>
          <Route path='Category_Popular' element={<Category_Popular/>}/>

          <Route path='download/:postid' element={<Download/>}/>
          <Route path='profile/:userid' element={<UserProfile/>}/>
          <Route path='upload' element={<Upload/>}/>
          <Route path='myinfo' element={<Myinfo/>}/>
          <Route path='myinfomodify' element={<MyInfoModify/>}/>
          <Route path='myposts' element={<MyPosts/>}/>
          <Route path='likeposts' element={<LikePosts/>}/>
          <Route path="about" element={<About/>} />
          <Route path='notfound' element={<NotFound/>}/>
          <Route path='helpdesk' element={<HelpDesk/>}/>

        </Route>

        {/* NotFound 페이지 추가 */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
