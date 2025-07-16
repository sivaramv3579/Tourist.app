import React from 'react';

const VoiceSearch = ({ setQuery }) => {
  const handleVoiceSearch = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setQuery(spokenText);
    };
    recognition.start();
  };

  return (
    <button onClick={handleVoiceSearch} style={{ margin: '10px' }}>
      🎤 Voice Search
    </button>
  );
};

export default VoiceSearch;