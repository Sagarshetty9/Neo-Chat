function UserCard({ user, onSelectUser }) {
  console.log(user)
  return (
    <div onClick={() => onSelectUser(user._id)} className="p-2 border cursor-pointer">
      <p>{user.username}</p>
    </div>
  );
}

export default UserCard;
