

function ContactCard({ contact, onSelect }) {
  return (
    <>
      <div
        onClick={() => {
          onSelect(contact._id);
        }}
        className="w-full h-1/4 border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white"
      >
        <div className="px-6 py-5 text-left h-full">
          <p className="text-base mb-4">{contact.username}</p>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
