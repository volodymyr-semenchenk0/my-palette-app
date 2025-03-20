import {useParams} from "react-router";

import paletteService from "../../services/paletteService.js";
import useClipboardNotification from "../../hooks/useClipBoardNotification.js";
import CopyButton from "./CopyButton.jsx";
import CopiedPopup from "./CopiedPopup.jsx";

const PaletteDetails = () => {
    const [open, copiedColor, copyColor] = useClipboardNotification();

    const params = useParams();
    const palette = paletteService.getPaletteById(params.id);

    if (!palette) {
        return <div>Palette not found!</div>;
    }

    return (
        <>
            <CopiedPopup open={open} color={copiedColor} />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full h-full">
                {palette.colors.slice(0, 20).map((color, index) => (
                    <div
                        key={index}
                        className="p-4 relative flex justify-center items-center hover:opacity-90 cursor-pointer"
                        style={{ backgroundColor: color.color }}
                        onClick={() => copyColor(color.color)}
                    >
                        <CopyButton/>
                        <p className="text-white absolute bottom-4 right-4">
                            {color.name}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default PaletteDetails;