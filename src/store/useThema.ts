import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

interface ThemeState {
  darkTheme: boolean
  toggleTheme: () => void
}

const useTheme = create<ThemeState>()((
  devtools(
    persist(
      (set) => ({
        darkTheme: false,
        toggleTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),
      }),
      {
        name: "themeDark",
      }
    )
  )
))

export default useTheme