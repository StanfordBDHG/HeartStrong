// This source file is part of the Stanford HeartStrong open-source project
//
// SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

import type { NavItem } from "../data/site";

export interface PageNeighbors {
  previousPage?: NavItem;
  nextPage?: NavItem;
}

export const getPageNeighbors = (
  navItems: NavItem[],
  currentPath: string,
): PageNeighbors => {
  const currentIndex = navItems.findIndex((item) => item.href === currentPath);

  if (currentIndex === -1) {
    return {};
  }

  return {
    previousPage: currentIndex > 0 ? navItems[currentIndex - 1] : undefined,
    nextPage:
      currentIndex < navItems.length - 1 ?
        navItems[currentIndex + 1]
      : undefined,
  };
};
