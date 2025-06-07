import { fireEvent, render, screen } from "@testing-library/react"
import { vi } from "vitest"
import ButtonThemeToggle from "."

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

vi.mock("@phosphor-icons/react", () => ({
  Moon: ({ size }: { size: number }) => (
    <div data-testid="moon-icon" data-size={size}>
      Moon
    </div>
  ),
  Sun: ({ size }: { size: number }) => (
    <div data-testid="sun-icon" data-size={size}>
      Sun
    </div>
  ),
}))

describe("ButtonThemeToggle molecule", () => {
  const mockToggleTheme = vi.fn()

  beforeEach(() => {
    mockToggleTheme.mockClear()
  })

  it("should render moon icon when darkTheme is false", () => {
    render(
      <ButtonThemeToggle toggleTheme={mockToggleTheme} darkTheme={false} />,
    )

    expect(screen.getByTestId("moon-icon")).toBeInTheDocument()
    expect(screen.queryByTestId("sun-icon")).not.toBeInTheDocument()
  })

  it("should render sun icon when darkTheme is true", () => {
    render(<ButtonThemeToggle toggleTheme={mockToggleTheme} darkTheme={true} />)

    expect(screen.getByTestId("sun-icon")).toBeInTheDocument()
    expect(screen.queryByTestId("moon-icon")).not.toBeInTheDocument()
  })

  it("should call toggleTheme when button is clicked", () => {
    render(
      <ButtonThemeToggle toggleTheme={mockToggleTheme} darkTheme={false} />,
    )

    const button = screen.getByRole("button", {
      name: /botão de troca de tema/i,
    })
    fireEvent.click(button)

    expect(mockToggleTheme).toHaveBeenCalledTimes(1)
  })
})
