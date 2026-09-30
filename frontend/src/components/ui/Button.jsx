
function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  const buttonBase =
    "hover:cursor-pointer inline-flex min-h-12 items-center justify-center gap-[9px] border-[3px] border-neo-ink px-[18px] font-extrabold leading-none text-neo-ink no-underline transition-[transform,box-shadow,background-color] duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline-[3px] focus-visible:outline-neo-seafoam focus-visible:outline-offset-[3px] [&_svg]:h-[17px] [&_svg]:w-[17px] [&_svg]:stroke-[2.8]";

  const variants = {
    primary:
      "bg-neo-coral shadow-[5px_5px_0_var(--color-neo-ink)] hover:bg-[hsl(4_95%_72%)] hover:shadow-[8px_8px_0_var(--color-neo-ink)]",

    secondary:
      "bg-neo-sunflower shadow-[5px_5px_0_var(--color-neo-ink)]",

    quiet:
      "bg-neo-paper shadow-[4px_4px_0_var(--color-neo-ink)]",
  };

  return (
    <button
      type={type}
      className={`${buttonBase} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

