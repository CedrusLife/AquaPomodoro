import Header from "../components/organisms/Header"
import NavInPhone from "../components/organisms/NavInMobile"
import useMainLayout from "./useMainLayout"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme } = useMainLayout()

  return (
    <div
      className={`bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light flex min-h-screen flex-col ${theme}`}
    >
      <Header />
      <main className="flex-1 p-4">{children}</main>
      <NavInPhone />
    </div>
  )
}
