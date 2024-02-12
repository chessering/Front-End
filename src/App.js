import { Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './components/layout';
import Login from "./pages/Login/Login";
import Auth from './pages/Login/Auth';
import CompleteAuth from './pages/Login/CompleteAuth';
import Mainpage from './pages/mainpage';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/authcomplete' element={<CompleteAuth/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;