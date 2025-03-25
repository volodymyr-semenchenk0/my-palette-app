import {Outlet} from "react-router-dom";
import BackButton from "../components/Buttons/BackButton.jsx";
import AudioButton from "../components/Buttons/AudioButton.jsx";
import {AudioProvider} from "../contexts/AudioContext.jsx";

const DetailedPaletteLayout = () => {

  return (
    <AudioProvider>
      <header className="w-full bg-white p-[24px] flex justify-between items-center">
        <BackButton/>
        <AudioButton/>
      </header>
      <main className="w-full grow flex flex-col">
        <Outlet/>
      </main>
    </AudioProvider>
  );
};

export default DetailedPaletteLayout;
