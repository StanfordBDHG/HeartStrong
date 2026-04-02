// This source file is part of the Stanford HeartStrong open-source project
//
// SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

import type { MascotKey } from "./site";

export interface IllustrationAsset {
  src: string;
  fallbackSrc?: string;
  width: number;
  height: number;
  alt: string;
}

export interface ThemedIllustration {
  light: IllustrationAsset;
  dark: IllustrationAsset;
}

export interface MascotIllustration {
  mascot: IllustrationAsset;
  label: string;
  scene?: ThemedIllustration;
}

export const mascotIllustrations: Record<MascotKey, MascotIllustration> = {
  welcome: {
    mascot: {
      src: "/assets/illustrations/mascots/welcome-heart.webp",
      fallbackSrc: "/assets/illustrations/mascots/welcome-heart.png",
      width: 1024,
      height: 1024,
      alt: "HeartStrong heart mascot greeting the viewer in a welcoming pose.",
    },
    label: "Friendly guide",
    scene: {
      light: {
        src: "/assets/illustrations/props/welcome-scene-light.webp",
        fallbackSrc: "/assets/illustrations/props/welcome-scene-light.png",
        width: 1536,
        height: 1024,
        alt: "",
      },
      dark: {
        src: "/assets/illustrations/props/welcome-scene-dark.webp",
        fallbackSrc: "/assets/illustrations/props/welcome-scene-dark.png",
        width: 1536,
        height: 1024,
        alt: "",
      },
    },
  },
  basics: {
    mascot: {
      src: "/assets/illustrations/mascots/basics-heart.webp",
      fallbackSrc: "/assets/illustrations/mascots/basics-heart.png",
      width: 1024,
      height: 1024,
      alt: "HeartStrong mascot in an open teaching pose for heart failure basics.",
    },
    label: "Learning companion",
    scene: {
      light: {
        src: "/assets/illustrations/props/basics-scene-light.webp",
        fallbackSrc: "/assets/illustrations/props/basics-scene-light.png",
        width: 1536,
        height: 1024,
        alt: "",
      },
      dark: {
        src: "/assets/illustrations/props/basics-scene-dark.webp",
        fallbackSrc: "/assets/illustrations/props/basics-scene-dark.png",
        width: 1536,
        height: 1024,
        alt: "",
      },
    },
  },
  goal: {
    mascot: {
      src: "/assets/illustrations/mascots/goal-heart.webp",
      fallbackSrc: "/assets/illustrations/mascots/goal-heart.png",
      width: 1024,
      height: 1024,
      alt: "HeartStrong mascot in an encouraging goal-setting pose.",
    },
    label: "Goal coach",
    scene: {
      light: {
        src: "/assets/illustrations/props/goal-scene-light.webp",
        fallbackSrc: "/assets/illustrations/props/goal-scene-light.png",
        width: 1536,
        height: 1024,
        alt: "",
      },
      dark: {
        src: "/assets/illustrations/props/goal-scene-dark.webp",
        fallbackSrc: "/assets/illustrations/props/goal-scene-dark.png",
        width: 1536,
        height: 1024,
        alt: "",
      },
    },
  },
  treatment: {
    mascot: {
      src: "/assets/illustrations/mascots/treatment-heart.webp",
      fallbackSrc: "/assets/illustrations/mascots/treatment-heart.png",
      width: 1024,
      height: 1024,
      alt: "HeartStrong mascot in a strong coaching stance for treatment training.",
    },
    label: "Training coach",
    scene: {
      light: {
        src: "/assets/illustrations/props/treatment-scene-light.webp",
        fallbackSrc: "/assets/illustrations/props/treatment-scene-light.png",
        width: 1536,
        height: 1024,
        alt: "",
      },
      dark: {
        src: "/assets/illustrations/props/treatment-scene-dark.webp",
        fallbackSrc: "/assets/illustrations/props/treatment-scene-dark.png",
        width: 1536,
        height: 1024,
        alt: "",
      },
    },
  },
  resources: {
    mascot: {
      src: "/assets/illustrations/mascots/resources-heart.webp",
      fallbackSrc: "/assets/illustrations/mascots/resources-heart.png",
      width: 1024,
      height: 1024,
      alt: "HeartStrong mascot in a calm guide pose for the resources page.",
    },
    label: "Resource guide",
    scene: {
      light: {
        src: "/assets/illustrations/props/resources-scene-light.webp",
        fallbackSrc: "/assets/illustrations/props/resources-scene-light.png",
        width: 1536,
        height: 1024,
        alt: "",
      },
      dark: {
        src: "/assets/illustrations/props/resources-scene-dark.webp",
        fallbackSrc: "/assets/illustrations/props/resources-scene-dark.png",
        width: 1536,
        height: 1024,
        alt: "",
      },
    },
  },
  celebrate: {
    mascot: {
      src: "/assets/illustrations/mascots/celebrate-heart.webp",
      fallbackSrc: "/assets/illustrations/mascots/celebrate-heart.png",
      width: 1024,
      height: 1024,
      alt: "Small HeartStrong mascot celebrating a completed step.",
    },
    label: "Celebrate",
  },
};

export const medicationIllustrations: Record<string, ThemedIllustration> = {
  "arni-acei-arb": {
    light: {
      src: "/assets/illustrations/medications/arni-acei-arb-light.webp",
      fallbackSrc: "/assets/illustrations/medications/arni-acei-arb-light.png",
      width: 1536,
      height: 1024,
      alt: "",
    },
    dark: {
      src: "/assets/illustrations/medications/arni-acei-arb-dark.png",
      width: 1536,
      height: 1024,
      alt: "",
    },
  },
  "beta-blockers": {
    light: {
      src: "/assets/illustrations/medications/beta-blockers-light.webp",
      fallbackSrc: "/assets/illustrations/medications/beta-blockers-light.png",
      width: 1536,
      height: 1024,
      alt: "",
    },
    dark: {
      src: "/assets/illustrations/medications/beta-blockers-dark.webp",
      fallbackSrc: "/assets/illustrations/medications/beta-blockers-dark.png",
      width: 1536,
      height: 1024,
      alt: "",
    },
  },
  "sglt2-inhibitors": {
    light: {
      src: "/assets/illustrations/medications/sglt2-inhibitors-light.webp",
      fallbackSrc:
        "/assets/illustrations/medications/sglt2-inhibitors-light.png",
      width: 1536,
      height: 1024,
      alt: "",
    },
    dark: {
      src: "/assets/illustrations/medications/sglt2-inhibitors-dark.webp",
      fallbackSrc:
        "/assets/illustrations/medications/sglt2-inhibitors-dark.png",
      width: 1536,
      height: 1024,
      alt: "",
    },
  },
  mra: {
    light: {
      src: "/assets/illustrations/medications/mra-light.webp",
      fallbackSrc: "/assets/illustrations/medications/mra-light.png",
      width: 1536,
      height: 1024,
      alt: "",
    },
    dark: {
      src: "/assets/illustrations/medications/mra-dark.webp",
      fallbackSrc: "/assets/illustrations/medications/mra-dark.png",
      width: 1536,
      height: 1024,
      alt: "",
    },
  },
};
