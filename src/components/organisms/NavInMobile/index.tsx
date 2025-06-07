import NavLinkMobile from "../../molecules/NavLinkMobile"
import useNavInPhone from "./useNavInMobile"

export default function NavInMobile() {
  const { navLinks } = useNavInPhone()
  return (
    <nav className="flex sm:hidden">
      {navLinks.map((link) => (
        <NavLinkMobile
          key={link.id}
          to={link.to}
          label={link.label}
          icon={link.icon}
        />
      ))}
    </nav>
  )
}
