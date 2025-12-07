import React from "react";
import { FaCommentDots } from "react-icons/fa";

const ChatToggleButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50 transition-all"
    >
      <FaCommentDots className="text-xl" />
    </button>
  );
};

export default ChatToggleButton;
