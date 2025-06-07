import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"
import Button from "./index"

describe("Button Atom", () => {
  it("should render button with children content", () => {
    render(<Button ariaLabel="button test">Click me</Button>)

    const button = screen.getByRole("button", { name: /button test/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("Click me")
  })

  it("should call onCLick handler when clicked", async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(
      <Button ariaLabel="button test" onClick={handleClick}>
        Click me
      </Button>,
    )

    const button = screen.getByRole("button")
    await user.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("should be accessible", () => {
    render(<Button ariaLabel="button test">Accessible Button</Button>)

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute("type", "button")
  })
})
