import {Outlet} from "react-router-dom";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const BaseLayout = () => {
  return (
    <>
      <Header/>
      <main className="min-h-screen w-full max-w-[1300px] flex items-center pt-26 pb-32 px-4 sm:px-6 lg:px-0">
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
};

export default BaseLayout;
