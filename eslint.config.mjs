// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    // Настройки проекта
    "env": {
      // Проект для браузера
      "browser": true,
      // Включаем возможности ES6
      "es6": true,
      // Добавляем возможности ES2017
      "es2017": true
    },
    // Наборы правил
    "extends": [
      // Базовый набор правил eslint
      "eslint:recommended",
      // Отключаем правила из базового набора
      "plugin:@typescript-eslint/eslint-recommended",
      // Базовые правила для TypeScript
      "plugin:@typescript-eslint/recommended",
      // Правила TS, требующие инфо о типах
      "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    // Движок парсинга
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      // Движку нужен проект TS для правил с типами
      "project": "tsconfig.json",
      "tsconfigRootDir": ".",
    },
    // Плагин с наборами правил для TypeScript
    "plugins": ["@typescript-eslint"],
  }

)
