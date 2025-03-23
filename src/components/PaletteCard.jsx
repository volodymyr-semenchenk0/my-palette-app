import React from "react";
import {Link} from "react-router-dom";

import RightTopIcon from "../assets/Icons/arrow-right-top.svg?react";

const PaletteCard = ({palette}) => {

    return (
        <>
            <Link
                to={`/palette/${palette.id}`}
            >
                <div className="group bg-white rounded-2xl p-4 transition-transform duration-300 hover:scale-102">

                    <div className="grid grid-cols-5 grid-rows-4 rounded-md overflow-hidden">
                        {
                            palette.colors.map((color, key) => (
                                <div
                                    key={key}
                                    className="w-full h-[56px]"
                                    style={{backgroundColor: color.color}}
                                />
                            ))
                        }
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <h2 className="text-lg font-bold text-gray-950">
                            {palette.paletteName}
                        </h2>
                        <div className="relative w-6 h-6 flex items-center justify-center">
                              <span
                                  className="absolute text-2xl transition-opacity duration-200 opacity-100 group-hover:opacity-0">
                                {palette.emoji}
                              </span>
                            <span
                                className="absolute text-gray-950 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                                <RightTopIcon width={24} height={24} fill="currentColor"/>
                              </span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default PaletteCard;