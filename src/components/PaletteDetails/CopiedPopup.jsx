const CopiedPopup = ({open, color}) => {
    if (!open) return null;

    return (
        <div
            className={`
                fixed inset-0 z-10 flex flex-col justify-center items-center
                transition-all duration-1000 ease-out
                ${open ? "opacity-100" : "opacity-0"}
            `}
            style={{background: color}}
        >
            <div
                className={`
                    flex flex-col items-center w-full
                    transition-all duration-500 ease-out
                    ${open ? "opacity-100 transform scale-100" : "opacity-0 transform scale-95"}
                `}
            >
                <div className="w-full text-center py-12 text-6xl text-white uppercase bg-white/10">
                    Copied!
                </div>

                <div className="text-mono text-white text-xl mt-4">
                    {color}
                </div>
            </div>
        </div>
    );
}

export default CopiedPopup;