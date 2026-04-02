// This source file is part of the Stanford HeartStrong open-source project
//
// SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      include: ["src/lib/**/*.ts", "src/data/**/*.ts"],
      thresholds: {
        statements: 90,
        branches: 65,
        functions: 85,
        lines: 90,
      },
    },
    include: ["tests/**/*.test.ts"],
  },
});
