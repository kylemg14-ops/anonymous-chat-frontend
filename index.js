import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('message', (data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, []);

  const sendMessage = () => {
    if (input) {
      socket.emit('message', { msg: input });
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="flex-1 overflow-y-auto mb-4 bg-white p-4 rounded shadow">
        {messages.map((m, i) => (
          <div key={i} className="mb-2">
            <span className="font-bold text-blue-600">{m.username}: </span>
            <span>{m.msg}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="說點什麼吧..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">發送</button>
      </div>
    </div>
  );
}