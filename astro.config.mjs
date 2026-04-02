// This source file is part of the Stanford HeartStrong open-source project
//
// SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const defaultRepositoryOwner = "StanfordBDHG";
const defaultRepositoryName = "HeartStrong";
const repository =
  process.env.GITHUB_REPOSITORY ??
  `${defaultRepositoryOwner}/${defaultRepositoryName}`;
const [repositoryOwner, repositoryName] =
  repository ? repository.split("/") : [];
const isUserOrOrgPagesRepository = repositoryName?.endsWith(".github.io");
const site =
  process.env.SITE_URL ??
  (repositoryOwner && repositoryName ?
    isUserOrOrgPagesRepository ? `https://${repositoryOwner}.github.io`
    : `https://${repositoryOwner}.github.io/${repositoryName}`
  : undefined);
const base =
  process.env.BASE_PATH ??
  ((
    process.env.GITHUB_ACTIONS === "true" &&
    repositoryName &&
    !isUserOrOrgPagesRepository
  ) ?
    `/${repositoryName}`
  : "/");

export default defineConfig({
  output: "static",
  site,
  base,
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
  vite: {
    server: {
      host: true,
    },
  },
});
