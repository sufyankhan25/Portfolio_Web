import React, { useState } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hi! Ask me anything ✨", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });
      const reply = res.data.reply;
      setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, I couldn't reply.", sender: "bot" },
      ]);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-xl z-50 text-black overflow-hidden">
      <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
        <span className="font-semibold">SufyanBot</span>
        <FaTimes onClick={onClose} className="cursor-pointer" />
      </div>

      <div className="h-64 overflow-y-auto p-3 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm px-3 py-2 rounded max-w-xs ${
              msg.sender === "bot"
                ? "bg-gray-200 text-left"
                : "bg-blue-500 text-white ml-auto text-right"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex border-t p-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
          className="flex-1 px-2 py-1 text-sm outline-none"
        />
        <button
          onClick={sendMessage}
          className="text-blue-600 font-bold px-3"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
