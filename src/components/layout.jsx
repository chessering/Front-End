import Header from "./header/header";
import Footer from "./footer/footer";
import { Outlet } from 'react-router-dom';


function Layout( ) {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;