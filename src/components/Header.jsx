import React from 'react';
import {Link} from "react-router-dom";
import video from "../assets/robot.webm";

function Header() {
    return (

        <header
            className="fixed top-0 left-0 w-full bg-gray-500 text-white p-[16px] z-50 flex justify-between items-center">
            <Link to={`/`}>
                <h1 className="text-xl font-bold">Flat UI Colors</h1>
            </Link>
            <video width="120" autoPlay muted loop playsInline>
                <source src={video} type="video/webm"/>
            </video>
        </header>
    );
}

export default Header;