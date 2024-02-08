import Header from "./header/header";
import Footer from "./footer/footer";
import UserProfile from "../pages/UserProfile";

export default function Layout() {
  return (
    <div>
      <Header />
        <UserProfile></UserProfile>
      <Footer />
    </div>
  );
}
