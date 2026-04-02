// This source file is part of the Stanford HeartStrong open-source project
//
// SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)
// SPDX-License-Identifier: MIT

import speziWebConfigurations from "@stanfordspezi/spezi-web-configurations";

const { prettierConfig } = speziWebConfigurations;

export default {
  ...prettierConfig,
  plugins: ["prettier-plugin-astro", ...(prettierConfig.plugins ?? [])],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
