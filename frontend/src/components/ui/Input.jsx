// components/ui/Input.jsx

function Input({
  label,
  id,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  required = false,
  className = "",
  ...props
}) {
  const inputClassName = `
    h-[52px] w-full
    border-[3px] border-neo-ink
    bg-neo-paper px-[14px]
    text-[0.93rem] font-semibold text-neo-ink
    outline-none
    transition-[box-shadow,transform,background-color] duration-150
    placeholder:text-neo-muted/70
    focus:-translate-x-0.5
    focus:-translate-y-0.5
    focus:bg-[hsl(48_98%_63%_/_0.38)]
    focus:shadow-[4px_4px_0_var(--color-neo-sunflower)]
    ${className}
  `;

  return (
    <div className="grid gap-2">
      {label && (
        <label
          htmlFor={id}
          className="
            font-mono text-[0.68rem] font-bold
            uppercase tracking-[0.08em]
            text-neo-ink
          "
        >
          {label}
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={inputClassName}
        {...props}
      />
    </div>
  );
}

export default Input;