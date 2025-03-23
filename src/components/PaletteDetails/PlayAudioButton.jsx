const PlayAudioButton = ({isAudioEnabled, setAudioEnabled}) => {
    const handleAudioPlaying = () => {
        setAudioEnabled(prevAudio => !prevAudio);
    };

    return (
        <>
            <button
                className="text-gray-600 hover:text-gray-950 cursor-pointer"
                onClick={handleAudioPlaying}
            >
                {isAudioEnabled ? "🔊 Audio On" : "🔇 Audio Off"}
            </button>
        </>
    );
};

export default PlayAudioButton;