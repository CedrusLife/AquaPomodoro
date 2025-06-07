import useTheme from "../../../store/useThema"
import ButtonThemeToggle from "../../molecules/ButtonThemeToggle"
import Nav from "../Nav"

export default function Header() {
  const { darkTheme, toggleTheme } = useTheme()

  return (
    <header className="flex justify-around py-2">
      <div className="flex items-center gap-2 select-none">
        <img
          src={`/logo-${darkTheme ? "dark" : "light"}.svg`}
          alt="AquaPomodoro Logo"
          width={32}
        />
        <h1 className="text-2xl font-bold">
          <span className="text-secundary-light dark:text-secundary-dark">
            Aqua
          </span>
          Pomodoro
        </h1>
      </div>
      <div className="flex items-center gap-2 max-sm:hidden">
        <Nav />
        <ButtonThemeToggle darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </div>
    </header>
  )
}
