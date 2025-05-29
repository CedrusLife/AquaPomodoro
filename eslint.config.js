import config from "eslint-config-xo"
import { defineConfig } from "eslint/config"
import eslintConfigPrettier from "eslint-config-prettier/flat"

export default defineConfig([
  config,
  eslintConfigPrettier,
  {
    env: {
      browser: true,
      jest: true,
    },
    extends: ["eslint:recommended", "plugin:security/recommended"],
    plugins: ["security"],
  },
])
