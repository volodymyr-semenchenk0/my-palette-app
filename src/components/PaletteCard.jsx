import React from "react";
import {Link} from "react-router-dom";

const PaletteCard = ({palette}) => {

    return (
        <>
            <Link
                to={`/palette/${palette.id}`}
            >
                <div className="bg-white rounded-2xl p-4 w-full transition-transform duration-300 hover:scale-102">

                    <div className="grid grid-cols-5 grid-rows-4 rounded-md overflow-hidden">
                        {palette.colors.slice(0, 20).map((color, key) => (
                            <div
                                key={key}
                                className="w-full h-[56px]"
                                style={{ backgroundColor: color.color }}
                            />
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <h2 className="text-lg font-bold text-neutral-800">
                            {palette.paletteName}
                        </h2>
                        <span className="text-2xl">
                            {palette.emoji}
                        </span>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default PaletteCard;