import Header from "./header/header";
import Footer from "./footer/footer";
import Donwload from "../pages/Donwload";
import UserProfile from "../pages/UserProfile"
import Modal from "./Profile/Modal";


export default function Layout() {
  return (
    <div>
      <Header />
        <Modal title="팔로워"></Modal>
      <Footer />
    </div>
  );
}
