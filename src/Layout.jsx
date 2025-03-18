import React from "react";
import Header from "./components/Header.jsx";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className="min-h-screen flex items-center justify-center pt-26 pb-32">
                {children}
            </main>
        </div>
    );
};

export default Layout;