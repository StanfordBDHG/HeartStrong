// This source file is part of the Stanford HeartStrong open-source project
//
// SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

import {
  SUPPORT_RIBBON_STORAGE_KEY,
  THEME_COLORS,
} from "../lib/siteChromeConfig";

const windowWithObserver = window as Window & {
  __heartThemeListenerReady?: boolean;
  __heartChromeListenersReady?: boolean;
  __heartChromeInitScheduled?: boolean;
};

type ColorScheme = keyof typeof THEME_COLORS;

const getThemeColors = (): Record<ColorScheme, string> => ({
  light: document.documentElement.dataset.themeColorLight ?? THEME_COLORS.light,
  dark: document.documentElement.dataset.themeColorDark ?? THEME_COLORS.dark,
});

const getSupportRibbonStorageKey = () =>
  document.documentElement.dataset.supportRibbonStorageKey ??
  SUPPORT_RIBBON_STORAGE_KEY;

const getSupportRibbonDismissed = () => {
  try {
    return window.localStorage.getItem(getSupportRibbonStorageKey()) === "true";
  } catch {
    return false;
  }
};

const resolveColorScheme = (): ColorScheme => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ?
      "dark"
    : "light";
};

const applyColorScheme = (scheme: ColorScheme) => {
  document.documentElement.dataset.colorScheme = scheme;
  document.documentElement.style.colorScheme = scheme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", getThemeColors()[scheme]);
};

const initColorScheme = () => {
  applyColorScheme(resolveColorScheme());

  if (!windowWithObserver.__heartThemeListenerReady) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const syncWithSystemPreference = (event: MediaQueryListEvent) => {
      applyColorScheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", syncWithSystemPreference);
    windowWithObserver.__heartThemeListenerReady = true;
  }
};

const applySupportRibbonVisibility = (isDismissed: boolean) => {
  document.documentElement.dataset.supportRibbon =
    isDismissed ? "hidden" : "visible";

  document
    .querySelectorAll<HTMLElement>("[data-support-ribbon-banner]")
    .forEach((ribbon) => {
      ribbon.hidden = isDismissed;
      ribbon.setAttribute("aria-hidden", String(isDismissed));
    });
};

const initSupportRibbon = () => {
  applySupportRibbonVisibility(getSupportRibbonDismissed());

  document
    .querySelectorAll<HTMLButtonElement>("[data-dismiss-support-ribbon]")
    .forEach((button) => {
      if (button.dataset.ready === "true") return;
      button.dataset.ready = "true";

      button.addEventListener("click", () => {
        try {
          window.localStorage.setItem(getSupportRibbonStorageKey(), "true");
        } catch {
          // Ignore storage failures and still hide the ribbon for this page.
        }

        applySupportRibbonVisibility(true);
      });
    });
};

const initMenu = () => {
  const closeAllMenus = () => {
    document
      .querySelectorAll<HTMLElement>("[data-mobile-nav]")
      .forEach((nav) => {
        nav.dataset.open = "false";
      });

    document
      .querySelectorAll<HTMLButtonElement>("[data-menu-toggle]")
      .forEach((toggle) => {
        toggle.setAttribute("aria-expanded", "false");
      });
  };

  document
    .querySelectorAll<HTMLButtonElement>("[data-menu-toggle]")
    .forEach((toggle) => {
      if (toggle.dataset.ready === "true") return;
      toggle.dataset.ready = "true";

      const nav = document.querySelector<HTMLElement>("[data-mobile-nav]");
      if (!nav) return;

      toggle.addEventListener("click", () => {
        const isOpen = nav.dataset.open === "true";
        closeAllMenus();
        nav.dataset.open = String(!isOpen);
        toggle.setAttribute("aria-expanded", String(!isOpen));
      });

      nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeAllMenus);
      });
    });

  if (document.documentElement.dataset.menuListenersReady === "true") return;
  document.documentElement.dataset.menuListenersReady = "true";

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllMenus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Node)) return;
    const openNav = document.querySelector<HTMLElement>(
      '[data-mobile-nav][data-open="true"]',
    );
    if (!openNav) return;

    const toggle = document.querySelector<HTMLButtonElement>(
      '[data-menu-toggle][aria-expanded="true"]',
    );
    if (openNav.contains(event.target) || toggle?.contains(event.target))
      return;

    closeAllMenus();
  });
};

const initPrintButtons = () => {
  document
    .querySelectorAll<HTMLButtonElement>("[data-print-page]")
    .forEach((button) => {
      if (button.dataset.ready === "true") return;
      button.dataset.ready = "true";

      button.addEventListener("click", () => {
        window.print();
      });
    });
};

const initReveals = () => {
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((item) => {
    item.classList.add("is-visible");
  });
};

const initSiteChrome = () => {
  initColorScheme();
  initSupportRibbon();
  initMenu();
  initPrintButtons();
  initReveals();
};

const scheduleSiteChromeInit = () => {
  if (windowWithObserver.__heartChromeInitScheduled) return;

  windowWithObserver.__heartChromeInitScheduled = true;

  window.requestAnimationFrame(() => {
    windowWithObserver.__heartChromeInitScheduled = false;
    initSiteChrome();
  });
};

if (!windowWithObserver.__heartChromeListenersReady) {
  document.addEventListener("astro:page-load", scheduleSiteChromeInit);
  scheduleSiteChromeInit();

  windowWithObserver.__heartChromeListenersReady = true;
}
