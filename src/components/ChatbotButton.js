import React, { useState } from 'react';
import './ChatbotButton.css';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage = { text: inputValue, sender: 'user', id: Date.now() };
      setMessages([...messages, newMessage]);
      setInputValue('');

      // Simulate bot response after a delay
      setTimeout(() => {
        const botResponse = {
          text: "Thanks for your message! This is a sample response from the AI assistant.",
          sender: 'bot',
          id: Date.now() + 1
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <>
      <button
        className={`chatbot-button ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? '✕' : (
          <span role="img" aria-label="robot">
            🤖
          </span>
        )}
      </button>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>AI Assistant</h3>
          </div>
          <div className="chatbot-messages">
            {messages.length === 0 ? (
              <div className="welcome-message">
                Hello! I'm your AI assistant. How can I help you with the textbook today?
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message ${msg.sender}-message`}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>
          <form onSubmit={sendMessage} className="chatbot-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-send-button">Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotButton;