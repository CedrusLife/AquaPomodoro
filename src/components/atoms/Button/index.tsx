interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit" | "reset" | undefined
  ariaLabel: string
}

export default function Button({
  children,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="hover:bg-tertiary-light dark:hover:bg-tertiary-dark cursor-pointer rounded-md p-2 transition-colors dark:hover:text-black"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
