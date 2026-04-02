// This source file is part of the Stanford HeartStrong open-source project
//
// SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

export const prefixBase = (baseUrl: string, path: string): string => {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const normalizedBase = baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}` || "/";
};

export const withBase = (path: string): string =>
  prefixBase(import.meta.env.BASE_URL, path);

export const resolveSiteUrl = (site: URL | string, path: string): URL => {
  const siteRoot = new URL(site);

  if (!siteRoot.pathname.endsWith("/")) {
    siteRoot.pathname = `${siteRoot.pathname}/`;
  }

  return new URL(path.replace(/^\//, ""), siteRoot);
};
