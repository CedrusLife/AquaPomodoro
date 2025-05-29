import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App", () => {
  it("should render the title", () => {
    render(<App />)
    const titleElement = screen.getByText("AquaPomodoro")
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveClass("text-blue-600")
  })
})
