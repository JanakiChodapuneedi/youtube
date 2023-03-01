import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName, generateText } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
    const [liveMessage,setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: generateText(20),
        })
      );
      //console.log("api polling");
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="flex flex-col w-1/3">
    <div
      className="m-1 h-[600px] shadow border border-black
     bg-slate-50 rounded-lg overflow-y-scroll w-full flex flex-col-reverse"
    >
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} comment={chat.message} />
        ))}     
      
    </div>
    <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
        console.log(liveMessage);
        e.preventDefault();
        dispatch(addMessage({
            message:liveMessage,
            name:"Janaki Ch"
        }));
        setLiveMessage("")
    }}>
        <input 
        className="w-5/6 mx-2"
        type="text" value={liveMessage} 
        onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className="px-2 bg-green-200 rounded-lg">Send</button>
    </form>
    </div>
  );
};

export default LiveChat;
