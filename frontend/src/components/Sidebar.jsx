// components/Sidebar.jsx
import SearchUser from "./SearchUser";
import ContactList from "./ContactList";

function Sidebar({ contacts, onSelectContact, onAddContact, isOpen, setIsOpen, targetUserId }) {
  return (
    <div
      className={`fixed md:static inset-0 md:inset-auto w-full md:w-1/4 bg-neo-canvas border-r-2 border-neo-border flex flex-col transition-transform z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
    >
      {/* Close button for mobile */}
      <button
        onClick={() => setIsOpen(false)}
        className="md:hidden p-4 text-right font-bold text-neo-ink"
      >
        ✕
      </button>

      {/* Search */}
      <div className="p-4 md:p-6 border-b-2 border-neo-border">
        <SearchUser onSelectUser={onAddContact} />
      </div>

      {/* Contacts */}
      <div className="flex-1 overflow-y-auto">
        <ContactList contacts={contacts} onSelectContact={onSelectContact} targetUserId={targetUserId}/>
      </div>
    </div>
  );
}

export default Sidebar;