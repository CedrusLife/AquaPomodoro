import { Link } from "react-router-dom"
import { cn } from "../../../utils/cn"

interface NavLinkDesktopProps {
  to: string
  label: string
  dark?: boolean
}

export default function NavLinkDesktop({
  to,
  label,
  dark,
}: NavLinkDesktopProps) {
  return (
    <Link
      className={cn(
        "hover:bg-tertiary-light dark:hover:bg-tertiary-dark rounded-md p-2 transition-colors dark:hover:text-black",
        dark &&
          "hover:bg-tertiary-light dark:bg-secundary-dark dark:hover:bg-tertiary-dark bg-secundary-light text-white dark:hover:text-black",
      )}
      aria-label={`Ir para ${label}`}
      to={to}
    >
      {label}
    </Link>
  )
}
