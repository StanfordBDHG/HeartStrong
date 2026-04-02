// This source file is part of the Stanford HeartStrong open-source project
//
// SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

import speziWebConfigurations from "@stanfordspezi/spezi-web-configurations";
import { configs as astroConfigs } from "eslint-plugin-astro";
import globals from "globals";

const { getEslintNodeConfig } = speziWebConfigurations;

export default [
  {
    ignores: [".astro/**", "eslint_report.json"],
  },
  {
    settings: {
      "import/core-modules": [
        "astro:assets",
        "astro:content",
        "astro:env/client",
        "astro:env/server",
        "astro:transitions",
      ],
    },
  },
  ...getEslintNodeConfig({
    tsconfigRootDir: import.meta.dirname,
  }),
  {
    files: ["**/*.{js,mjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    files: ["**/*.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
    },
  },
  {
    files: ["astro.config.mjs", "eslint.config.mjs", ".prettierrc.mjs"],
    languageOptions: {
      globals: globals.node,
    },
  },
  ...astroConfigs["flat/recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["src/scripts/**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,astro}"],
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  {
    files: ["**/*.astro"],
    rules: {
      "astro/no-set-html-directive": "error",
    },
  },
  {
    files: ["vitest.config.ts"],
    rules: {
      "import/no-default-export": "off",
    },
  },
];
