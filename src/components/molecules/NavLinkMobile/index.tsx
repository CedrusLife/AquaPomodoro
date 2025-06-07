import { Link } from "react-router-dom"

interface NavLinkMobileProps {
  to: string
  label: string
  icon?: React.ComponentType<{ size?: number }>
}

export default function NavLinkMobile({
  icon: Icon,
  to,
  label,
}: NavLinkMobileProps) {
  return (
    <Link
      className="active:bg-tertiary-light dark:hover:bg-tertiary-dark flex w-full justify-center border-l-[1px] border-black/10 p-6 transition-colors dark:border-white/10 dark:hover:text-black"
      to={to}
      aria-label={`Ir para ${label}`}
    >
      {Icon && <Icon size={24} />}
    </Link>
  )
}
