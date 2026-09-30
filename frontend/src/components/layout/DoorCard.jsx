function DoorCard({ number, title, description, bgColor }) {
  return (
    <div
      className={`
        ${bgColor}
        min-h-64
        flex flex-col justify-between
        border-2 border-neo-ink
        p-6 md:p-8
        shadow-[5px_5px_0_var(--color-neo-ink)]
        transition-[transform,box-shadow] duration-150
        hover:-translate-x-0.75 hover:-translate-y-0.75
        hover:shadow-[8px_8px_0_var(--color-neo-ink)]
      `}
    >
      <div>
        <p className="mb-4 font-bold">{number}</p>

        <h4 className="mb-4 text-xl font-bold text-neo-ink md:text-2xl">
          {title}
        </h4>

        <p className="text-sm md:text-base">
          {description}
        </p>
      </div>

      <p className="font-bold">→</p>
    </div>
  );
}

export default DoorCard;