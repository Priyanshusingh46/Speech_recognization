import React,{useState} from "react";
import copy from "copy-to-clipboard"; 
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import css from "./style.css";
import bg from "./Images/bg.jpg"
function App() {


  const [copyText, setCopyText] = useState('');
  
  const copyToClipboard = () => {
     copy(copyText);
     alert(`You have copied "${copyText}"`);
  }


  const {transcript,listening,resetTranscript,browserSupportsSpeechRecognition} = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }



  return (
    <div className="AppOuterContainer">
      <h2 id="headingpara">Welcome to SpeechRecognition App ~ Priyanshu Singh</h2>
      <div className="textwritten">
      <p id="headingpara" onChange={(e)=>setCopyText(e)}  >{transcript}</p>
      </div>
     
      <div className="buttondiv">
      <button id="buttonhai"onClick={SpeechRecognition.startListening}>Start</button>
      <button id="buttonhai" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button id="buttonhai" onClick={resetTranscript}>Reset</button>
      <button id="buttonhai" onClick={copyToClipboard}>Copy to Clipboard</button>
      </div>
    </div>
  );
}

export default App;
