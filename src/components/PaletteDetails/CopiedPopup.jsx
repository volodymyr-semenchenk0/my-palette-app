const CopiedPopup = ({open, color}) => {
  return (
    <div
      className={`fixed inset-0 z-10 flex flex-col justify-center items-center 
      transition-all duration-300 ease-in-out ${open ? "visible" : "invisible"}`}
      style={{background: color}}
    >
      <div className={`flex flex-col items-center w-full uppercase scale-125 ${open ? "popup-open" : "popup-close"}`}
      >
        <div className="w-full text-center py-12 text-7xl text-white bg-white/10">
          Copied!
        </div>

        <div className="text-mono text-white text-xl mt-6">
          {color}
        </div>
      </div>
    </div>
  );
}

export default CopiedPopup;
