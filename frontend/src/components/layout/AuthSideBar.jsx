function AuthSidebar() {
  return (
    <div className="hidden md:flex md:w-1/2 bg-neo-seafoam flex-col justify-center items-center p-8">
      <div className="text-center">
        <p className="text-neo-ink font-bold mb-8">YOUR CORNER IS READY</p>
        <h2 className="text-6xl font-bold text-neo-ink leading-tight mb-8">
          Less noise.
          <br />
          More you.
        </h2>
        <p className="text-neo-ink text-lg max-w-sm">
          A tiny ritual for turning the inside of your head into an actual conversation.
        </p>
      </div>
    </div>
  );
}

export default AuthSidebar;