import PaletteCard from "./PaletteCard.jsx";
import {getAllPalette} from "../utils/getPaletteData.js";

const PaletteTable = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {
        getAllPalette().map((palette) => (
          <PaletteCard palette={palette}/>
        ))
      }
    </div>
  );
}

export default PaletteTable;
