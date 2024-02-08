import Header from "./header/header";
import Footer from "./footer/footer";
import Donwload from "../pages/Donwload";


export default function Layout() {
  return (
    <div>
      <Header />
        <Donwload></Donwload>
      <Footer />
    </div>
  );
}
