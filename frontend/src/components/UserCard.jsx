function UserCard({ user, onSelectUser }) {
  return (
    <div 
      onClick={() => onSelectUser(user._id)} 
      className="p-3 border-b border-neo-divider bg-neo-paper hover:bg-neo-canvas cursor-pointer transition flex items-center gap-3"
    >
      <div className="w-8 h-8 bg-neo-seafoam border border-neo-border flex items-center justify-center text-xs font-bold text-neo-ink">
        {user.username.charAt(0).toUpperCase()}
      </div>
      <div className="flex-1">
        <p className="font-bold text-neo-ink text-sm">{user.username}</p>
        <p className="text-xs text-neo-quiet">{user.email}</p>
      </div>
    </div>
  );
}

export default UserCard;