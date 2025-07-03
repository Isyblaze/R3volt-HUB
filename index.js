import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Revolt Hub</h1>
      <p className="text-lg mb-6">Your space for Fintech 💸, Social 💬, and Games 🎮</p>
      <div className="flex gap-4">
        <button className="bg-blue-500 px-4 py-2 rounded-lg">Fintech</button>
        <button className="bg-green-500 px-4 py-2 rounded-lg">Social</button>
        <button className="bg-purple-500 px-4 py-2 rounded-lg">Gaming</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);