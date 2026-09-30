function ContactCard({ contact, onSelect, isSelected }) {
  return (
    <div
      onClick={() => onSelect(contact._id)}
      className={`w-full px-3 py-2.5 font-extrabold cursor-pointer focus-visible:outline-[3px] focus-visible:outline-neo-seafoam focus-visible:outline-offset-[3px] ${
        isSelected
          ? "border-[3px] border-neo-ink bg-neo-canvas shadow-[3px_3px_0_var(--color-neo-ink)]"
          : "border-2 border-neo-border bg-neo-paper hover:bg-neo-canvas transition"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 shrink-0 bg-neo-coral border-2 border-neo-ink flex items-center justify-center font-bold text-neo-ink text-xs">
          {contact.username.charAt(0).toUpperCase()}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-bold text-neo-ink text-xs md:text-sm truncate">
            {contact.username}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;