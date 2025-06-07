import { AlarmIcon, GaugeIcon, GearIcon, UserIcon } from "@phosphor-icons/react"
import type React from "react"

const useNavInPhone = () => {
  interface NavLink {
    id: number
    icon: React.ComponentType<{ size?: number }>
    to: string
    label: string
  }

  const navLinks: NavLink[] = [
    {
      id: 1,
      icon: AlarmIcon,
      to: "/",
      label: "pomodoro",
    },
    {
      id: 2,
      icon: GaugeIcon,
      to: "/dashboard",
      label: "dashboard",
    },
    {
      id: 3,
      icon: GearIcon,
      to: "/preferencias",
      label: "preferências",
    },
    {
      id: 4,
      icon: UserIcon,
      to: "/perfil",
      label: "perfil",
    },
  ]

  return { navLinks }
}

export default useNavInPhone
