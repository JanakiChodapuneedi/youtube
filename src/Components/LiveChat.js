import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName, generateText } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
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
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <div
      className="m-1 h-[600px] shadow border border-black
     bg-slate-50 rounded-lg overflow-y-scroll w-1/3 flex flex-col-reverse"
    >
      {chatMessages.map((chat, index) => (
        <ChatMessage key={index} name={chat.name} comment={chat.message} />
      ))}
    </div>
  );
};

export default LiveChat;
