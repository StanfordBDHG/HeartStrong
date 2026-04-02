// This source file is part of the Stanford HeartStrong open-source project
//
// SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

export interface GoalSummaryInput {
  priority?: string;
  priorityCustom?: string;
  barrier?: string;
  action?: string;
  frequency?: string;
  support?: string;
}

export interface GoalSummaryOutput {
  priority: string;
  barrier: string;
  action: string;
  frequency: string;
  support: string;
  statement: string;
}

export const GOAL_EMPTY_STATE = "Not added yet";

export const normalizeGoalValue = (
  value?: string,
  fallback: string = GOAL_EMPTY_STATE,
): string => {
  const normalized = value?.trim() ?? "";
  return normalized.length ? normalized : fallback;
};

export const resolveGoalPriority = (input: GoalSummaryInput): string => {
  const custom = normalizeGoalValue(input.priorityCustom, "");
  if (custom.length) {
    return custom;
  }

  return normalizeGoalValue(input.priority);
};

export const buildGoalSummary = (
  input: GoalSummaryInput,
): GoalSummaryOutput => {
  const priority = resolveGoalPriority(input);
  const barrier = normalizeGoalValue(input.barrier);
  const action = normalizeGoalValue(input.action);
  const frequency = normalizeGoalValue(input.frequency);
  const support = normalizeGoalValue(input.support);

  if (priority === GOAL_EMPTY_STATE && action === GOAL_EMPTY_STATE) {
    return {
      priority,
      barrier,
      action,
      frequency,
      support,
      statement:
        "Choose a priority and work through each step to build your SMART goal.",
    };
  }

  const actionPart =
    action !== GOAL_EMPTY_STATE ?
      action.replace(/\.$/, "")
    : "take one manageable step";
  const frequencyPart =
    frequency !== GOAL_EMPTY_STATE ?
      ` ${frequency.replace(/\.$/, "")}`
    : " on a regular schedule";
  const priorityPart =
    priority !== GOAL_EMPTY_STATE ?
      ` so I can ${priority.replace(/\.$/, "")}`
    : "";
  const supportPart =
    support !== GOAL_EMPTY_STATE ?
      ` I will ask ${support.replace(/\.$/, "")} to help me stay on track.`
    : "";
  const barrierPart =
    barrier !== GOAL_EMPTY_STATE ?
      ` I will plan ahead for ${barrier.replace(/\.$/, "")}.`
    : "";

  return {
    priority,
    barrier,
    action,
    frequency,
    support,
    statement: `My HeartStrong goal is to ${actionPart}${frequencyPart}${priorityPart}.${supportPart}${barrierPart}`,
  };
};
