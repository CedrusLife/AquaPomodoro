export const useNav = () => {
  interface NavItem {
    id: number
    label: string
    to: string
    dark?: boolean
  }

  const navLinks: NavItem[] = [
    {
      id: 1,
      label: "Pomodoro",
      to: "/",
    },
    {
      id: 2,
      label: "Dashboard",
      to: "/dashboard",
    },
    {
      id: 3,
      label: "Preferencias",
      to: "/preferencias",
    },
    {
      id: 4,
      label: "Login",
      to: "/login",
      dark: true,
    },
  ]

  return { navLinks }
}
