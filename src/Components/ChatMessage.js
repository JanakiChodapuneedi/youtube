import React from "react";

const ChatMessage = ({name,comment}) => {
  return (
    <div className="m-2 p-1 flex bg-gray-200 rounded-lg">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="px-2 font-bold">{name}</span>
      <span>{comment}</span>
    </div>
  );
};

export default ChatMessage;
