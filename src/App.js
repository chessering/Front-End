import './index.css';
import Myinfo from "./pages/Myinfo.jsx";
import Layout from './components/layout';

function App() {
  return (
    <Layout>
      <div className="bg-red-500"> Tailwind Css 적용 테스트 </div>
      <Myinfo></Myinfo>
    </Layout>
  );
}

export default App;