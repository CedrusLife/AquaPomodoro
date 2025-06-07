import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NavLink from "."

const RouterWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
)

describe("NavLink molecule", () => {
  describe("Desktop variant", () => {
    it("should renders desktop NavLink with label", () => {
      render(
        <RouterWrapper>
          <NavLink to="/home" label="Home" />
        </RouterWrapper>,
      )

      const link = screen.getByRole("link", { name: /ir para home/i })
      expect(link).toBeInTheDocument()
      expect(link).toHaveTextContent("Home")
      expect(link).toHaveAttribute("href", "/home")
    })

    it("should render dark variant styles when dark prop is true", () => {
      render(
        <RouterWrapper>
          <NavLink to="/home" label="Home" dark />
        </RouterWrapper>,
      )

      const link = screen.getByRole("link", { name: /ir para home/i })
      expect(link).toHaveClass("bg-secundary-light")
    })
  })
})
