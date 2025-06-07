import NavLinkDesktop from "../../molecules/NavLinkDesktop"
import { useNav } from "./useNav"

export default function Nav() {
  const { navLinks } = useNav()

  return (
    <nav className="flex items-center gap-2 select-none">
      {navLinks.map((link) => (
        <NavLinkDesktop
          key={link.id}
          to={link.to}
          label={link.label}
          dark={link.dark}
        />
      ))}
    </nav>
  )
}
