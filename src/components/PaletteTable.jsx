import React, {useEffect, useState} from 'react';
import PaletteCard from "./PaletteCard.jsx";

const PaletteTable = () => {
    const [palettes, setPalettes] = useState([]);

    useEffect(() => {
        fetch("palette.json")
            .then((response) => response.json())
            .then((data) => setPalettes(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="w-full max-w-[1200px]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {palettes.map((palette) => (
                    <PaletteCard key={palette.id} palette={palette} />
                ))}
            </div>
        </div>
    );
}

export default PaletteTable;