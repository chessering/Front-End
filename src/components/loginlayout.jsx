import Footer from "./footer/footer";
import { Outlet } from 'react-router-dom';


function LoginLayout( ) {
  return (
    <div>
      <Outlet /> 
      <Footer />
    </div>
  );
}

export default LoginLayout;