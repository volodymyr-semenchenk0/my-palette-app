import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import PlayAudioButton from "../components/PaletteDetails/PlayAudioButton.jsx";

const DetailedPaletteLayout = () => {
    const [isAudioEnabled, setAudioEnabled] = useState(true);

    return (
        <>
            <header className="w-full bg-white p-[24px] flex justify-between items-center">
                <BackButton/>
                <PlayAudioButton
                    isAudioEnabled={isAudioEnabled}
                    setAudioEnabled={setAudioEnabled}
                />
            </header>
            <main className="w-full grow flex flex-col">
                <Outlet context={{isAudioEnabled}}/>
            </main>
        </>
    );
};

export default DetailedPaletteLayout;