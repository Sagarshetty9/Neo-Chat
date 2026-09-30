const MessageBubble = ({ message, isOwn }) => {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs md:max-w-md px-4 py-3 border-2 border-neo-ink ${
          isOwn 
            ? 'bg-neo-sunflower text-neo-ink' 
            : 'bg-neo-seafoam text-neo-ink'
        }`}
      >
        <p className="text-sm font-medium">{message.text}</p>
        {isOwn && (
          <p className="text-xs text-neo-quiet mt-2 opacity-70">
            {message.timestamp || 'sent'}
          </p>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;