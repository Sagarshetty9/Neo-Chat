const MessageBubble = ({ message, isOwn }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isOwn ? 'flex-end' : 'flex-start',
        marginBottom: '10px'
      }}
    >
      <div
        style={{
          maxWidth: '60%',
          padding: '10px 15px',
          backgroundColor: isOwn ? '#ffff00' : '#1a1a1a',
          color: isOwn ? '#000' : '#fff',
          border: '2px solid #000',
          borderRadius: '0',
          wordWrap: 'break-word',
          fontFamily: 'monospace'
        }}
      >
        <p style={{ margin: '0 0 5px 0' }}>{message.text}</p>
        {isOwn && <small style={{ opacity: 0.7 }}>{message.status}</small>}
      </div>
    </div>
  );
};

export default MessageBubble;