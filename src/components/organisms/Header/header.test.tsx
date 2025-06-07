import { fireEvent, render, screen } from "@testing-library/react"
import { vi } from "vitest"
import Header from "."

const mockToggleTheme = vi.fn()
vi.mock("../../../store/useThema", () => ({
  default: vi.fn(() => ({
    darkTheme: false,
    toggleTheme: mockToggleTheme,
  })),
}))

vi.mock("../Nav", () => ({
  default: () => <nav data-testid="nav-component">Navigation</nav>,
}))

vi.mock("../../molecules/ButtonThemeToggle", () => ({
  default: ({
    darkTheme,
    toggleTheme,
  }: {
    darkTheme: boolean
    toggleTheme: () => void
  }) => (
    <button
      data-testid="theme-toggle-button"
      onClick={toggleTheme}
      aria-label={`Current theme: ${darkTheme ? "dark" : "light"}`}
    >
      {darkTheme ? "Dark" : "Light"} Theme
    </button>
  ),
}))

describe("Header organisms", () => {
  beforeEach(() => {
    mockToggleTheme.mockClear()
  })

  it("should render header with logo and title", () => {
    render(<Header />)

    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByAltText("AquaPomodoro Logo")).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(screen.getByText("Aqua")).toBeInTheDocument()
    expect(screen.getByText("Pomodoro")).toBeInTheDocument()
  })

  it("should render light theme logo when darkTheme is false", () => {
    render(<Header />)

    const logo = screen.getByAltText("AquaPomodoro Logo")
    expect(logo).toHaveAttribute("src", "/logo-light.svg")
  })

  it("should render dark theme logo when darkTheme is true", async () => {
    const useTheme = await import("../../../store/useThema")
    vi.mocked(useTheme.default).mockReturnValue({
      darkTheme: true,
      toggleTheme: mockToggleTheme,
    })

    render(<Header />)

    const logo = screen.getByAltText("AquaPomodoro Logo")
    expect(logo).toHaveAttribute("src", "/logo-dark.svg")
  })

  it("should call toggleTheme when theme button is clicked", () => {
    render(<Header />)

    const themeButton = screen.getByTestId("theme-toggle-button")
    fireEvent.click(themeButton)

    expect(mockToggleTheme).toHaveBeenCalledTimes(1)
  })
})
