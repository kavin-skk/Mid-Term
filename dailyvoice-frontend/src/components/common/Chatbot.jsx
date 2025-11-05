import React, { useState, useEffect, useRef } from 'react';

const Chatbot = ({ catName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const userMsg = input.trim();
      setMessages([...messages, { type: 'user', text: userMsg }]);
      setInput('');
      
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: `Here's the latest on ${catName}. Check out our breaking news section above for more updates!` 
        }]);
      }, 800);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition"
      >
        <i className="fas fa-comment-dots text-2xl"></i>
      </button>
      {isOpen && (
        <div className="bg-white shadow-2xl rounded-lg w-80 h-96 flex flex-col mt-3">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-t-lg font-bold flex items-center justify-between">
            <span><i className="fas fa-robot mr-2"></i>Ask DailyVoice</span>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
                <div className={`${msg.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} p-3 rounded-lg ${msg.type === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'} max-w-xs text-sm shadow`}>
                  {msg.type === 'bot' && <i className="fas fa-robot text-blue-600 mr-1"></i>}
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 border-t bg-white">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question..." 
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;