import React from "react";
import {Outlet} from "react-router";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


const Layout = () => {
    return (
        <div>
            <Header />
            <main className="min-h-screen flex items-center justify-center pt-26 pb-32 px-4 sm:px-6 lg:px-0">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;