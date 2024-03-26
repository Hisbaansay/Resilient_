/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import { doc, addDoc, collection } from "firebase/firestore"
import { factCheckTweet, disCheckTweet, infoCheckTweet } from "./openai";
import { useState } from "react";
import {db} from "../firebase"

interface AppProps {
  tweetText: string;
}

export default function App({ tweetText }: AppProps) {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isTweetFactChecked, setIsTweetFactChecked] = useState(false);
  const [openaiResponse, setOpenaiResponse] = useState("");
  const [discategory, setdiscategory] = useState("");
  const [infostatus, setinfostatus] = useState("");
  const [category, setCategory] = useState("");


  const handleButtonClick = async () => {
    setIsButtonLoading(true);
    const [response, category] = await factCheckTweet(tweetText);
    const [discategory] = await disCheckTweet(tweetText);
    const [infostatus] = await infoCheckTweet(tweetText);
   
    setOpenaiResponse(response);
    setCategory(category);
    setdiscategory(discategory)
    setinfostatus(infostatus)
    addDoc(collection(db ,"tweets"), {
      category, discategory, response, tweetText, infostatus
    });
    
    alert("Fact :"+category+"\n"+"Disaster Category :"+discategory+"\n"+"Information Category :"+infostatus+"\n"+"Justification :"+response);
   
    
  };

  return (
    <div className="App">
     
        <button
          onClick={handleButtonClick}
          disabled={isButtonLoading}
        >
          Fact-Check
        </button>
    </div>
  );
}
