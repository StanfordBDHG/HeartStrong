// This source file is part of the Stanford HeartStrong open-source project
//
// SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

import type { APIRoute } from "astro";
import { resolveSiteUrl } from "../lib/urls";

const getRobotsTxt = (site?: URL | string) => `User-agent: *
Allow: /
${
  site ?
    `\nSitemap: ${resolveSiteUrl(site, "/sitemap-index.xml").toString()}`
  : ""
}
`;

export const GET: APIRoute = ({ site }) =>
  new Response(getRobotsTxt(site), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
