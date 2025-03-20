// import React, {useEffect, useState} from 'react';
import PaletteCard from "./PaletteCard.jsx";
import paletteService from "../services/paletteService.js";

const PaletteTable = () => {
    return (
        <>
            <div className="w-full max-w-[1200px]">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paletteService.getAllPalette().map((palette, index) => (
                        <div
                            key={index}
                            className="w-full">
                            <PaletteCard palette={palette} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PaletteTable;