import {createContext, useContext, useEffect, useState} from "react";

const AudioContext = createContext(null);

export const AudioProvider = ({children}) => {
  const [audioEnabled, setAudioEnabled] = useState(() => {
    return JSON.parse(localStorage.getItem('audioEnabled')) ?? true;
  });

  useEffect(() => {
    localStorage.setItem("audioEnabled", JSON.stringify(audioEnabled));
  }, [audioEnabled])

  const toggleAudio = () => {
    setAudioEnabled(prev => !prev);
  };

  return (
    <AudioContext.Provider value={{audioEnabled, toggleAudio}}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
