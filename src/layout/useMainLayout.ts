import { useEffect, useState } from "react"
import useTheme from "../store/useThema"

const useMainLayout = () => {
  const { darkTheme } = useTheme()
  const [theme, setTheme] = useState<string>("")

  useEffect(() => {
    if (darkTheme) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [darkTheme])

  return { theme }
}

export default useMainLayout
