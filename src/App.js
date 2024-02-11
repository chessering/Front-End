import { Route, Routes } from 'react-router-dom';
import './index.css';
import Login from "./pages/Login/Login";
import Auth from './pages/Login/Auth';
import CompleteAuth from './pages/Login/CompleteAuth';
import Myinfo from "./pages/MyPage/Myinfo";
import MyPosts from "./pages/MyPage/MyPosts";
import MyInfoModify from "./pages/MyPage/MyInfoModify";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/authcomplete' element={<CompleteAuth/>}/>
        <Route path='/myinfo' element={<Myinfo/>}/>
        <Route path='/myposts' element={<MyPosts/>}/>
        <Route path='/myinfomodify' element={<MyInfoModify/>}/>
      </Routes>
    </div>
  );
}

export default App;