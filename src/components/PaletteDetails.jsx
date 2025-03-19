import React from "react";
import {useLocation} from "react-router-dom";
import Header from "./Header.jsx";

const PaletteDetails = () => {
    const location = useLocation();
    const palette = location.state?.palette;
    console.log(palette);

    if (!palette) {
        return <div>Palette not found</div>;
    }

    const handleCopyColor = (color) => {
        return color;
    };

    return (
        <>
            <Header />
            <div className="w-screen h-screen">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full h-full">
                    {palette.colors.slice(0, 20).map((color, key) => (
                        <div
                            key={key}
                            className="p-4 relative"
                            style={{ backgroundColor: color.color }}
                            onClick={() => {handleCopyColor(color.color)}}
                        >
                            <p className="text-white absolute bottom-4 right-4">{color.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PaletteDetails;