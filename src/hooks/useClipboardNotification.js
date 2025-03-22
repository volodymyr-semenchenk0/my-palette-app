import {useState} from "react";
import clickSound from "../assets/src_notify.mp3";

export default function useClipboardNotification(isAudioEnabled) {
    const [open, setOpen] = useState(false);
    const [copiedColor, setCopiedColor] = useState("");

    const handleOpen = () => {
        setOpen(true);

        if (isAudioEnabled) {
            new Audio(clickSound).play();
        }
    }

    const handleClose = () => {
        setOpen(false);
    }

    async function copyColor(color,) {
        try {
            await navigator.clipboard.writeText(color);
            setCopiedColor(color);
            handleOpen();

            setTimeout(() => {
                handleClose()
            }, 760);

        } catch (error) {
            console.error(error.message);
        }
    }

    return [open, copiedColor, copyColor];
}