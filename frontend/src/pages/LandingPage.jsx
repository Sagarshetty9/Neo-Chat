import Button from "../components/ui/Button";
import DoorCard from "../components/layout/DoorCard.jsx";
import { useNavigate } from "react-router-dom";
import useTitle from "../hooks/useTitle.js"

function Landing() {
  const navigate = useNavigate();
  useTitle("Welcome to neo chat")

  const doors = [
    {
      number: "01",
      title: "Untangle a thought",
      description:
        "Turn that scattered idea into something you can actually use.",
      bgColor: "bg-neo-seafoam",
    },
    {
      number: "02",
      title: "Make a small plan",
      description:
        "Start with the messy version. We'll find the next right move.",
      bgColor: "bg-neo-sunflower",
    },
    {
      number: "03",
      title: "Go somewhere new",
      description: "Ask a curious question and see where the thread takes you.",
      bgColor: "bg-neo-coral",
    },
  ];

  return (
    <div className="bg-neo-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6 md:p-8 border-b-2 border-neo-border flex-wrap gap-4">
        <h1 className="text-xl md:text-2xl font-bold text-neo-ink">Neo chat</h1>
        <div className="flex gap-2 md:gap-4">
          <Button variant="quiet" onClick={() => navigate("/login")}>
            Log in
          </Button>
          <Button onClick={() => navigate("/register")} variant="secondary">
            Join neo chat
          </Button>
        </div>
      </header>

      {/* Hero */}

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <p className=" md:text-lg mb-4 max-w-2xl">
          A SOFTER PLACE TO THINK OUT LOUD...
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Take it <span className="text-neo-coral ">into being.</span>
        </h2>
        <p className="text-base md:text-lg mb-4 max-w-2xl">
          Neo Chat is an expressive corner for big questions, tiny plans, and
          all the thoughts that need somewhere to land
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-20">
          <Button onClick={() => navigate("/register")}>
            Start a conversation
          </Button>
          <Button variant="quiet" onClick={() => navigate("/login")}>
           I already have an account
          </Button>
        </div>
      </div>

      <div className="border-y-3 border-neo-ink bg-neo-coral p-10 text-3xl font-bold">
        <p className="mx-auto max-w-175">
          Come as you are. Leave with a little more shape to things.
        </p>
      </div>
      {/* Doors section */}
      <div className="bg-neo-surface px-6 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold text-neo-ink mb-8 md:mb-12">
            Pick a door. Bring your brain.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {doors.map((door) => (
              <DoorCard
                key={door.number}
                number={door.number}
                title={door.title}
                description={door.description}
                bgColor={door.bgColor}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neo-ink text-neo-white p-6 md:p-8 text-center">
        <p className="font-bold text-sm md:text-base text-neo-sunflower hover:cursor-pointer " onClick={() => navigate("/register")}>Make your way in.</p>
      </footer>
    </div>
  );
}

export default Landing;
