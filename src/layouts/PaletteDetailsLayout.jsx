import React from "react";
import Header from "../components/Header.jsx";
import PaletteDetails from "../components/PaletteDetails/PaletteDetails.jsx";
import {Link} from "react-router-dom";

const PaletteDetailsLayout = () => {
    return (
        <>
            <header className="top-0 left-0 w-full bg-gray-500 text-white p-[24px]">
                <Link to={`/`} >
                    <h1 className="text-xl font-bold">Flat UI Colors</h1>
                </Link>
            </header>
            <div className="w-screen h-screen">
                <PaletteDetails />
            </div>
        </>
    );
};

export default PaletteDetailsLayout;