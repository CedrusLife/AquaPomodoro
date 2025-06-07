import Button from "../../atoms/Button"
import { Moon, Sun } from "@phosphor-icons/react"
import { AnimatePresence, motion } from "framer-motion"

interface ButtonThemeToggleProps {
  toggleTheme: () => void
  darkTheme: boolean
}

export default function ButtonThemeToggle({
  toggleTheme,
  darkTheme,
}: ButtonThemeToggleProps) {
  const Icon = darkTheme ? Sun : Moon
  const key = darkTheme ? "sun" : "moon"
  const rotateIn = darkTheme ? -90 : 90
  const rotateOut = -rotateIn

  return (
    <Button ariaLabel="botão de troca de tema" onClick={() => toggleTheme()}>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={{ rotate: rotateIn }}
            animate={{ rotate: 0 }}
            exit={{ rotate: rotateOut }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Icon size={24} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </Button>
  )
}
