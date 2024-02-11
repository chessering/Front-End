import Header from "./header/header";
import Footer from "./footer/footer";
import Mainpage from "../pages/mainpage";


export default function Layout() {
  return (
    <div>
      <Header />
      <Mainpage />
      <Footer />
    </div>
  );
}
