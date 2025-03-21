import React from "react";
import {Link, Outlet} from "react-router-dom";

const DetailedPaletteLayout = () => {
    return (
        <>
            <header className="sticky top-0 left-0 w-full bg-gray-500 text-white p-[24px] ">
                <Link to={`/`}>
                    <h1 className="text-xl font-bold">Flat UI Colors</h1>
                </Link>
            </header>
            <main className="w-full grow flex flex-col">
                <Outlet />
            </main>
        </>
    );
};

export default DetailedPaletteLayout;