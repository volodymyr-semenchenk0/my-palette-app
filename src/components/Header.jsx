import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-500 text-white p-[24px] z-50">
            <Link to={`/`} >
                <h1 className="text-xl font-bold">Flat UI Colors</h1>
            </Link>
        </header>
    );
}

export default Header;