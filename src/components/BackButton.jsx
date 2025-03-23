import BackIcon from "../assets/Icons/arrow-left.svg?react";
import {useNavigate} from "react-router";

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <>
            <button
                className="back-button text-gray-600 flex gap-2 items-center hover:text-gray-950 cursor-pointer"
                onClick={() => {
                    handleBack()
                }}
            >
                <BackIcon width={20} height={20} fill="currentColor"/>
                Back
            </button>
        </>
    );
}

export default BackButton;