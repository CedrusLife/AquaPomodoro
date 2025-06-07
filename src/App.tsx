import { Route, Routes } from "react-router-dom"
import Pomodoro from "./pages/Pomodoro"
import MainLayout from "./layout/MainLayout"

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Pomodoro />} />
      </Routes>
    </MainLayout>
  )
}
