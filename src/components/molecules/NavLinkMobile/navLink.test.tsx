import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NavLinkMobile from "."

const MockIcon = ({ size }: { size?: number }) => (
  <svg data-testid="mock-icon" width={size} height={size}>
    <circle cx={12} cy={12} r={12} />
  </svg>
)

const RouterWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
)

describe("Mobile variant", () => {
    it("should renders mobile NavLink with icon", () => {
      render(
        <RouterWrapper>
          <NavLinkMobile to="/home" label="Home" icon={MockIcon} />
        </RouterWrapper>,
      )

      const link = screen.getByRole("link", { name: /ir para home/i })
      const icon = screen.getByTestId("mock-icon")

      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute("href", "/home")
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveAttribute("width", "24")
      expect(icon).toHaveAttribute("height", "24")
    })
  })