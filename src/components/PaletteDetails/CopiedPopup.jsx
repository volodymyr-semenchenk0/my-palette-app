

const CopiedPopup = ({ open, color }) => {
    if (!open) return null;

    return (
        <div className="fixed flex justify-center items-center bg-black text-white w-screen h-screen z-1000">
            <h1 className="text-2xl leading-tight text-white">
                Copied Color: {color}
            </h1>
        </div>
    );
}

export default CopiedPopup;