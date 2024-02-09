import Header from "./header/header";
import Footer from "./footer/footer";
import Myinfo from "../pages/Myinfo.jsx";

export default function Layout() {
  return (
    <div>
      <Header />
        <Myinfo/>
      <Footer />
    </div>
  );
}
