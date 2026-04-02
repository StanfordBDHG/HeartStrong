// This source file is part of the Stanford HeartStrong open-source project
//
// SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

import { describe, expect, it } from "vitest";
import {
  GOAL_EMPTY_STATE,
  buildGoalSummary,
  normalizeGoalValue,
  resolveGoalPriority,
} from "../src/lib/goalSummary";

describe("goal summary helpers", () => {
  it("returns the fallback for empty values", () => {
    expect(normalizeGoalValue("   ")).toBe(GOAL_EMPTY_STATE);
  });

  it("returns the starter copy when no goal details are present", () => {
    const summary = buildGoalSummary({});

    expect(summary.priority).toBe(GOAL_EMPTY_STATE);
    expect(summary.action).toBe(GOAL_EMPTY_STATE);
    expect(summary.statement).toBe(
      "Choose a priority and work through each step to build your SMART goal.",
    );
  });

  it("prefers a custom priority over a preset option", () => {
    expect(
      resolveGoalPriority({
        priority: "Live longer",
        priorityCustom: "Walk with my neighbor",
      }),
    ).toBe("Walk with my neighbor");
  });

  it("builds a readable summary sentence from the form values", () => {
    const summary = buildGoalSummary({
      priority: "Have more energy",
      barrier: "bad weather",
      action: "walk for 10 minutes",
      frequency: "3 times each week",
      support: "my daughter",
    });

    expect(summary.priority).toBe("Have more energy");
    expect(summary.statement).toContain(
      "walk for 10 minutes 3 times each week",
    );
    expect(summary.statement).toContain("so I can Have more energy");
    expect(summary.statement).toContain("I will ask my daughter");
    expect(summary.statement).toContain("bad weather");
  });

  it("uses the custom priority when building the final statement", () => {
    const summary = buildGoalSummary({
      priority: "Spend time with family",
      priorityCustom: "walk outside without stopping",
      action: "complete one lap around my block",
      frequency: "twice a week",
    });

    expect(summary.priority).toBe("walk outside without stopping");
    expect(summary.statement).toContain(
      "so I can walk outside without stopping",
    );
  });
});
