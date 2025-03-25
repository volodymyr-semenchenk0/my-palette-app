import {useParams} from "react-router";

import useClipboardNotification from "../../hooks/useClipboardNotification.js";
import CopyButton from "./CopyButton.jsx";
import CopiedPopup from "./CopiedPopup.jsx";
import {getPaletteById} from "../../utils/getPaletteData.js";

const PaletteDetails = () => {

  const [open, copiedColor, copyColor] = useClipboardNotification();

  const {id} = useParams();
  const palette = getPaletteById(id);

  if (!palette) {
    return <div>Palette not found!</div>;
  }

  return (
    <>
      <CopiedPopup open={open} color={copiedColor}/>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grow">
        {palette.colors.map((color, index) => (
          <button
            key={`color-${index}`}
            className="group p-4 relative flex justify-center items-center cursor-pointer"
            style={{backgroundColor: color.color}}
            onClick={() => copyColor(color.color)}
          >
            <CopyButton className="opacity-0 group-hover:opacity-100 group-active:scale-85 transfrom transition duration-300 ease-out"/>
            <p className="text-white absolute bottom-4 right-4 ">
              {color.name}
            </p>
          </button>
        ))}
      </div>
    </>
  );
}

export default PaletteDetails;