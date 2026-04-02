// This source file is part of the Stanford HeartStrong open-source project
//
// SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

import { describe, expect, it } from "vitest";
import { navItems } from "../src/data/site";
import { getPageNeighbors } from "../src/lib/navigation";
import { prefixBase, resolveSiteUrl } from "../src/lib/urls";

describe("navigation helpers", () => {
  it("returns previous and next pages for an interior route", () => {
    const neighbors = getPageNeighbors(navItems, "/goal-setting");

    expect(neighbors.previousPage?.href).toBe("/hf-basics");
    expect(neighbors.nextPage?.href).toBe("/treatment-options");
  });

  it("returns no previous page for the welcome route", () => {
    const neighbors = getPageNeighbors(navItems, "/");

    expect(neighbors.previousPage).toBeUndefined();
    expect(neighbors.nextPage?.href).toBe("/hf-basics");
  });

  it("returns no neighbors for an unknown route", () => {
    expect(getPageNeighbors(navItems, "/missing-page")).toEqual({});
  });

  it("prefixes internal paths with a GitHub Pages base path", () => {
    expect(prefixBase("/HeartStrong/", "/resources")).toBe(
      "/HeartStrong/resources",
    );
    expect(
      prefixBase(
        "/HeartStrong/",
        "assets/illustrations/mascots/welcome-heart.webp",
      ),
    ).toBe("/HeartStrong/assets/illustrations/mascots/welcome-heart.webp");
    expect(prefixBase("/HeartStrong/", "#goal-wizard")).toBe("#goal-wizard");
  });

  it("does not modify external or protocol links", () => {
    expect(prefixBase("/HeartStrong/", "https://example.com")).toBe(
      "https://example.com",
    );
    expect(prefixBase("/HeartStrong/", "mailto:hello@example.com")).toBe(
      "mailto:hello@example.com",
    );
    expect(prefixBase("/HeartStrong/", "tel:+18005551212")).toBe(
      "tel:+18005551212",
    );
  });

  it("resolves URLs correctly for GitHub Pages project-site metadata", () => {
    expect(
      resolveSiteUrl(
        "https://stanfordbdhg.github.io/HeartStrong",
        "/resources",
      ).toString(),
    ).toBe("https://stanfordbdhg.github.io/HeartStrong/resources");
    expect(
      resolveSiteUrl(
        "https://stanfordbdhg.github.io/HeartStrong",
        "/",
      ).toString(),
    ).toBe("https://stanfordbdhg.github.io/HeartStrong/");
  });
});
