import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { vi } from "vitest"
import App from "./App"

// Mock do mainLayout
vi.mock("./layout/MainLayout", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="main-layout">
      <div data-testid="layout-content">{children}</div>
    </div>
  ),
}))

// Mock do Pomodoro
vi.mock("./pages/Pomodoro", () => ({
  default: () => <div data-testid="page-home">Home Page Content</div>,
}))

describe("App Component", () => {
  it("should render MainLayout wrapper", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByTestId("main-layout")).toBeInTheDocument()
  })

  it("should render Pomodoro component on root path", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByTestId("page-home")).toBeInTheDocument()
    expect(screen.getByText("Home Page Content")).toBeInTheDocument()
  })

  it("should render Pomodoro inside MainLayout", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    )

    const mainLayout = screen.getByTestId("main-layout")
    const Pomodoro = screen.getByTestId("page-home")

    expect(mainLayout).toBeInTheDocument()
    expect(Pomodoro).toBeInTheDocument()
    expect(mainLayout).toContainElement(Pomodoro)
  })

  it("should handle navigation to root router", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByTestId("page-home")).toBeVisible()
  })
})
