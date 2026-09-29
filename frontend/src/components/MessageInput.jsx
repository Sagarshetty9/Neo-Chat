import { useState } from 'react';
import { SocketContext } from '../context/socketContext.jsx';
import { useContext } from 'react';

const MessageInput = ({ targetUserId }) => {
  const [message, setMessage] = useState('');
  const { socket } = useContext(SocketContext);

  const handleSend = (e) => {
    e.preventDefault();

    if (!message.trim() || !targetUserId) return;  // ← Add this check

    socket.emit('send-message', {
      message: message.trim(),
      targetUserId
    });

    setMessage('');
  };

  return (
    <form onSubmit={handleSend} style={{ display: 'flex', gap: '10px' }}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write to..."
        disabled={!targetUserId}  // ← Disable input
        style={{
          flex: 1,
          padding: '10px',
          border: '2px solid #000',
          fontFamily: 'monospace',
          opacity: targetUserId ? 1 : 0.5
        }}
      />
      <button
        type="submit"
        disabled={!targetUserId}  // ← Disable button
        style={{
          padding: '10px 20px',
          border: '2px solid #000',
          backgroundColor: '#ffff00',
          cursor: targetUserId ? 'pointer' : 'not-allowed',
          fontWeight: 'bold',
          opacity: targetUserId ? 1 : 0.5
        }}
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;