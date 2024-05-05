import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Hr from "./Hr";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <div className="font-inter min-h-screen max-w-[100vw] flex-wrap overflow-hidden bg-black text-white lg:max-w-full">
        <Header />
        <Hr />

        <div className="my-10 flex min-h-[calc(100vh-320px)] items-center">
          <Outlet />
        </div>

        <Hr />
        <Footer />
      </div>
    </>
  );
}
