import {useAudio} from "../../contexts/AudioContext.jsx";

const AudioButton = () => {
  const {audioEnabled, toggleAudio} = useAudio();

  return (
    <button
      className="text-gray-600 hover:text-gray-950 cursor-pointer"
      onClick={toggleAudio}
    >
      {audioEnabled ? "🔊 Audio On" : "🔇 Audio Off"}
    </button>
  );
};

export default AudioButton;
