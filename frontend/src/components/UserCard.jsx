function UserCard({results}) {
  return <>
    <div className="mt-4">
    {results.map((user) => (
      <div
        key={user._id}
        className="p-2 border cursor-pointer hover:bg-gray-100 m-1" >
        {user.username}
      </div>
    ))}
  </div></>;
}

export default UserCard;
