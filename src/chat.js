import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async (message) => {
    const userMessage = { role: 'user', content: message };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // Simulasi respons bot tanpa memanggil API ChatGPT
    setTimeout(() => {
      const botResponse = {
        role: 'assistant',
        content: 'This is a simulated response for your question: ' + message,
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleRecommendationClick = (question) => {
    sendMessage(question);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      {/* Chat Section */}
      <div style={{ flex: 2, paddingRight: '20px' }}>
        <div style={{ height: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
          {messages.map((message, index) => (
            <div key={index} style={{ margin: '10px 0' }}>
              <strong>{message.role === 'user' ? 'You' : 'Assistant'}: </strong>
              {message.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', marginTop: '10px' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ flex: 1, padding: '10px' }}
            placeholder="Type your message..."
          />
          <button type="submit" style={{ padding: '10px 20px' }}>Send</button>
        </form>
      </div>

      {/* Recommendations Section */}
      <div style={{ flex: 1 }}>
        <h3>Recommended Questions:</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li>
            <button
              style={{ padding: '10px', margin: '5px 0', width: '100%', cursor: 'pointer' }}
              onClick={() => handleRecommendationClick('What is the weather like today?')}
            >
              What is the weather like today?
            </button>
          </li>
          <li>
            <button
              style={{ padding: '10px', margin: '5px 0', width: '100%', cursor: 'pointer' }}
              onClick={() => handleRecommendationClick('Tell me a joke.')}
            >
              Tell me a joke.
            </button>
          </li>
          <li>
            <button
              style={{ padding: '10px', margin: '5px 0', width: '100%', cursor: 'pointer' }}
              onClick={() => handleRecommendationClick('How can I improve my coding skills?')}
            >
              How can I improve my coding skills?
            </button>
          </li>
          <li>
            <button
              style={{ padding: '10px', margin: '5px 0', width: '100%', cursor: 'pointer' }}
              onClick={() => handleRecommendationClick('What is the latest news?')}
            >
              What is the latest news?
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Chat;
