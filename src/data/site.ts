// This source file is part of the Stanford HeartStrong open-source project
//
// SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

export interface NavItem {
  slug: string;
  title: string;
  href: string;
  shortTitle: string;
}

export interface CallToAction {
  label: string;
  href: string;
}

export interface PageHero {
  title: string;
  intro: string;
  eyebrow: string;
  mascotKey: MascotKey;
  cta?: CallToAction;
}

export interface GoalPrompt {
  id: string;
  label: string;
  type: "choice" | "text" | "textarea";
  options?: string[];
}

export interface MedicationClass {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  whatItDoes: string;
  commonSideEffects: string[];
  responseStates: string[];
  mascotKey: MascotKey;
}

export interface ResourceItem {
  slug: string;
  title: string;
  kind: "printable" | "guide" | "external";
  href: string;
  description: string;
  printable: boolean;
  external: boolean;
}

export interface VideoItem {
  slug: string;
  title: string;
  description: string;
  context: string;
  youtubeId: string;
  placements: VideoPlacement[];
}

export interface VideoSection {
  slug: string;
  title: string;
  description: string;
  videos: VideoItem[];
}

export type VideoPlacement = "hf-basics" | "resources";

export type MascotKey =
  | "welcome"
  | "basics"
  | "goal"
  | "treatment"
  | "resources"
  | "celebrate";

export const siteTitle = "HeartStrong";

export const navItems: NavItem[] = [
  { slug: "welcome", title: "Welcome", href: "/", shortTitle: "Welcome" },
  {
    slug: "hf-basics",
    title: "HF Basics",
    href: "/hf-basics",
    shortTitle: "Basics",
  },
  {
    slug: "goal-setting",
    title: "Goal Setting",
    href: "/goal-setting",
    shortTitle: "Goals",
  },
  {
    slug: "treatment-options",
    title: "Treatment Options",
    href: "/treatment-options",
    shortTitle: "Treatment",
  },
  {
    slug: "resources",
    title: "Resources",
    href: "/resources",
    shortTitle: "Resources",
  },
];

export const pageHeroes: Record<string, PageHero> = {
  "/": {
    eyebrow: "Patient Action Guide",
    title: "HeartStrong brings your booklet to life.",
    intro:
      "Simple education, guided activities, and practical tools to help Veterans understand heart failure and feel more prepared for every appointment.",
    mascotKey: "welcome",
    cta: {
      label: "See how HeartStrong helps",
      href: "#welcome-highlights",
    },
  },
  "/hf-basics": {
    eyebrow: "Heart Failure Basics",
    title: "Understand what heart failure means and what to watch for.",
    intro:
      "Use this page alongside your booklet to review common symptoms, understand ejection fraction, and learn why medications matter.",
    mascotKey: "basics",
    cta: {
      label: "Start with the basics",
      href: "#hf-overview",
    },
  },
  "/goal-setting": {
    eyebrow: "SMART Goal Activity",
    title: "Turn what matters most into one clear next step.",
    intro:
      "Choose a goal that fits your life, name what gets in the way, and create a plan you can bring back to your booklet and care team.",
    mascotKey: "goal",
    cta: {
      label: "Build my goal",
      href: "#goal-wizard",
    },
  },
  "/treatment-options": {
    eyebrow: "Heart Training Program",
    title: "Learn the medication classes that help support your heart.",
    intro:
      "Tap through the four core therapy groups, review common side effects, and mark what feels familiar so you can bring questions to your next visit.",
    mascotKey: "treatment",
    cta: {
      label: "See the four medication groups",
      href: "#medication-explorer",
    },
  },
  "/resources": {
    eyebrow: "Resource Library",
    title: "Keep your trackers, videos, and visit prep tools in one place.",
    intro:
      "Use these printables and education links between appointments, then bring what you learn back to your HeartStrong booklet.",
    mascotKey: "resources",
    cta: {
      label: "Browse printables and tools",
      href: "#resource-library",
    },
  },
};

export const quickSupport = {
  emergencyLabel:
    "If you have chest pain, fainting, or shortness of breath at rest, call 911 right away.",
  disclaimer:
    "This website is for education only and does not provide medical advice. If you have symptoms or concerns about your health, contact your doctor or seek care right away.",
  crisisCtaLabel: "Veterans Crisis Line",
  crisisCallLabel: "Call 988, then press 1",
  crisisPhone: "988, then press 1",
  crisisText: "838255",
  crisisUrl: "https://www.veteranscrisisline.net/",
};

export const welcomeHighlights = [
  {
    title: "Notice symptoms earlier",
    description:
      "Use the symptom guide and daily trackers to spot change before it becomes overwhelming.",
  },
  {
    title: "Build a plan with your care team",
    description:
      "Learn the questions to ask, the medications to review, and what to bring to each appointment.",
  },
  {
    title: "Stay connected to what matters",
    description:
      "The goal-setting activity helps turn big priorities into one realistic next step.",
  },
];

export const focusAreaCards = [
  {
    title: "HF Basics",
    href: "/hf-basics",
    description:
      "Learn what heart failure means, review ejection fraction, and know when symptoms need attention.",
  },
  {
    title: "Goal Setting",
    href: "/goal-setting",
    description:
      "Create a SMART goal based on your priorities, barriers, and support system.",
  },
  {
    title: "Treatment Options",
    href: "/treatment-options",
    description:
      "Review the four medication classes and bring your tracker to every appointment.",
  },
  {
    title: "Resources",
    href: "/resources",
    description:
      "Find printable logs, video links, and extra tools that reinforce the booklet.",
  },
];

export const goalPrompts: GoalPrompt[] = [
  {
    id: "priority",
    label: "What matters most to you right now?",
    type: "choice",
    options: [
      "Spend time with family",
      "Stay out of the hospital",
      "Live longer",
      "Have more energy",
      "Reduce meds",
    ],
  },
  {
    id: "priorityCustom",
    label: "Add your own priority",
    type: "text",
  },
  {
    id: "barrier",
    label: "What gets in the way of this?",
    type: "textarea",
  },
  {
    id: "action",
    label: "What is one thing you can do to work toward this goal?",
    type: "textarea",
  },
  {
    id: "frequency",
    label: "How often will you do this?",
    type: "text",
  },
  {
    id: "support",
    label: "Who or what could help you stick with this goal?",
    type: "textarea",
  },
];

export const medicationClasses: MedicationClass[] = [
  {
    slug: "arni-acei-arb",
    title: "ARNI / ACEi / ARB",
    audience: "Often used for HFrEF",
    summary: "Helps lower the pressure your heart works against.",
    whatItDoes:
      "These medications relax blood vessels and help your heart pump against less pressure. They are often a foundation of treatment when your heart needs extra support.",
    commonSideEffects: [
      "Dizziness or feeling lightheaded",
      "A change in kidney function",
      "Cough with some ACE inhibitors",
      "A change in potassium level",
    ],
    responseStates: [
      "I know this medication",
      "I've heard of this, but I have questions",
      "This is new to me",
    ],
    mascotKey: "treatment",
  },
  {
    slug: "beta-blockers",
    title: "Beta Blockers",
    audience: "Often used for HFrEF",
    summary: "Slows the heart and helps it get stronger over time.",
    whatItDoes:
      "Beta blockers help your heart work more efficiently and may improve heart function over time. They can also help lower strain on the heart.",
    commonSideEffects: [
      "Feeling more tired at first",
      "Dizziness as your dose changes",
      "A slower heart rate",
      "Cold hands or feet",
    ],
    responseStates: [
      "I know this medication",
      "I've heard of this, but I have questions",
      "This is new to me",
    ],
    mascotKey: "basics",
  },
  {
    slug: "sglt2-inhibitors",
    title: "SGLT2 Inhibitors",
    audience: "Used in HFrEF and HFpEF",
    summary:
      "Helps the body get rid of extra fluid and may support heart health.",
    whatItDoes:
      "SGLT2 inhibitors help remove excess fluid and can lower the workload on your heart. They are used for some people with heart failure even when diabetes is not the main issue.",
    commonSideEffects: [
      "Needing to urinate more often",
      "Dehydration if fluid intake is too low",
      "Lightheadedness",
      "Genital yeast infections in some people",
    ],
    responseStates: [
      "I know this medication",
      "I've heard of this, but I have questions",
      "This is new to me",
    ],
    mascotKey: "resources",
  },
  {
    slug: "mra",
    title: "MRA",
    audience: "Used in HFrEF and some HFpEF",
    summary:
      "Helps reduce fluid strain and supports long-term heart protection.",
    whatItDoes:
      "MRAs help your body manage excess fluid and reduce some of the stress placed on your heart. Your care team usually keeps an eye on kidney function and potassium while you take them.",
    commonSideEffects: [
      "A change in potassium level",
      "A change in kidney function",
      "Breast tenderness or swelling with some medications",
      "Dehydration if fluid balance changes too much",
    ],
    responseStates: [
      "I know this medication",
      "I've heard of this, but I have questions",
      "This is new to me",
    ],
    mascotKey: "goal",
  },
];

export const symptomGuide = [
  {
    state: "Green: Keep going",
    tone: "green",
    items: [
      "No new or worse shortness of breath",
      "Weight is stable",
      "No new swelling in feet or ankles",
      "Physical activity feels close to normal",
    ],
    action:
      "Keep taking medications as directed and continue your daily routine.",
  },
  {
    state: "Yellow: Caution",
    tone: "amber",
    items: [
      "Weight gain of 3 pounds in a day or 5 pounds in a week",
      "Trouble sleeping or needing more pillows",
      "Shortness of breath with activity or a dry cough",
      "New dizziness or lightheadedness",
    ],
    action:
      "Call your healthcare team and use your symptom tracker to describe the change.",
  },
  {
    state: "Red: Alert",
    tone: "red",
    items: [
      "Fainting or passing out",
      "New chest pain or chest pressure",
      "Shortness of breath at rest",
      "New or severe dizziness, confusion, or sudden mental health distress",
    ],
    action: "Call 911 or go to the emergency room immediately.",
  },
];

export const videoSections: VideoSection[] = [
  {
    slug: "application",
    title: "ENGAGE-HF Application",
    description: "Helpful videos about using the ENGAGE-HF mobile app at home.",
    videos: [
      {
        slug: "engage-welcome",
        title: "Welcome Video",
        youtubeId: "EcwB48zjGXM",
        description:
          "The ENGAGE-HF app helps you and your care team track your heart health, medicines, symptoms, blood pressure, and weight between visits.",
        context:
          "Start here if you want a quick overview of how ENGAGE-HF supports daily check-ins and shared decision-making with your care team.",
        placements: ["resources"],
      },
      {
        slug: "engage-install-omron",
        title: "How to Install the App and Connect Omron Devices",
        youtubeId: "wW03MCNngGA",
        description:
          "This video shows how to connect your blood pressure cuff and scale to the ENGAGE-HF app.",
        context:
          "Use this when you are setting up home tracking devices or helping someone else get ENGAGE-HF ready.",
        placements: ["resources"],
      },
    ],
  },
  {
    slug: "medications",
    title: "Medication Videos",
    description:
      "Learn about heart failure medicines, why they matter, and how the core therapy groups support the heart.",
    videos: [
      {
        slug: "importance-of-heart-meds",
        title: "Importance of Heart Meds",
        youtubeId: "RDWYlyAMRAo",
        description:
          "An overview of guideline-directed medical therapy and why the four core medication groups help people feel better, live longer, and avoid hospitalization.",
        context:
          "Best before or after the medication guide so the four core treatment groups make more sense in plain language.",
        placements: ["hf-basics", "resources"],
      },
      {
        slug: "beta-blockers",
        title: "Beta Blockers",
        youtubeId: "XfgcXkq61k0",
        description:
          "Explains how beta blockers help the heart get stronger over time and what side effects to watch for early on.",
        context:
          "Helpful if beta blockers are part of your plan and you want a short refresher before your next visit.",
        placements: ["resources"],
      },
      {
        slug: "ace-inhibitors-arbs",
        title: "ACE Inhibitors and ARBs",
        youtubeId: "iY7I1g5Vxck",
        description:
          "Explains how ACE inhibitors and ARBs reduce strain on the heart, help remove salt and fluid, and relax blood vessels.",
        context:
          "A good follow-up when you are learning why blood pressure, kidneys, and potassium matter in heart failure care.",
        placements: ["resources"],
      },
      {
        slug: "arni",
        title: "Angiotensin Receptor/Neprilysin Inhibitors (ARNI)",
        youtubeId: "bh-_1GkZmok",
        description:
          "Explains how sacubitril and valsartan work together to lower pressure in the heart and support stronger pumping.",
        context:
          "Helpful if your care team has talked about Entresto or ARNI therapy and you want a simple explanation before follow-up.",
        placements: ["resources"],
      },
      {
        slug: "mra",
        title: "Mineralocorticoid Receptor Antagonists (MRAs)",
        youtubeId: "YhfPNHtvnLk",
        description:
          "Explains how MRAs help manage fluid and protect the heart, along with why potassium checks matter.",
        context:
          "Useful when blood work, potassium, or spironolactone/eplerenone comes up during medication changes.",
        placements: ["resources"],
      },
      {
        slug: "sglt2",
        title: "SGLT2 Inhibitors",
        youtubeId: "SKrk3OuIiyE",
        description:
          "Explains how SGLT2 inhibitors help lower heart pressure by removing extra water and sugar through the kidneys.",
        context:
          "A strong fit if you want to understand why this medicine may be used even when diabetes is not the main issue.",
        placements: ["resources"],
      },
      {
        slug: "diuretics",
        title: "Diuretics",
        youtubeId: "16UFTq-mZro",
        description:
          "Explains how water pills reduce swelling and breathing trouble, and why doses may change based on symptoms and labs.",
        context:
          "Helpful when swelling, breathing changes, or sudden weight gain make you wonder whether fluid is building up.",
        placements: ["resources"],
      },
    ],
  },
  {
    slug: "vitals-lifestyle",
    title: "Vitals and Lifestyle Videos",
    description:
      "Learn how daily monitoring and day-to-day habits support heart failure care between visits.",
    videos: [
      {
        slug: "intro-heart-failure",
        title: "Introduction to Heart Failure",
        youtubeId: "-uMPchtoxWQ",
        description:
          "A plain-language explanation of what heart failure is, why it is serious, and the symptoms that usually show up first.",
        context:
          "Watch this first if you want a simple explanation of what heart failure means and what changes to notice early.",
        placements: ["hf-basics", "resources"],
      },
      {
        slug: "blood-pressure-monitoring",
        title: "Blood Pressure Monitoring",
        youtubeId: "KBbePdLbwUE",
        description:
          "Explains why blood pressure trends matter in heart failure and how daily checks can guide medication decisions.",
        context:
          "Use this when you start tracking your numbers at home or want more context for blood pressure changes during med adjustments.",
        placements: ["resources"],
      },
      {
        slug: "weight-monitoring",
        title: "Weight Monitoring",
        youtubeId: "p1fHRIt8Sxc",
        description:
          "Explains why sudden weight gain can signal fluid retention and when to call your care team about changes.",
        context:
          "Helpful when you begin using the vitals tracker or want a clearer reason for daily weight checks.",
        placements: ["hf-basics", "resources"],
      },
      {
        slug: "diet-exercise",
        title: "Diet and Exercise",
        youtubeId: "8ETOXtCyO9k",
        description:
          "Explains how lower-salt eating and gradual activity can support breathing, energy, and heart strength.",
        context:
          "A good follow-up when you want practical lifestyle guidance that fits the rest of your treatment plan.",
        placements: ["resources"],
      },
    ],
  },
  {
    slug: "symptoms",
    title: "Symptom Videos",
    description:
      "Learn about symptom tracking, health status surveys, and what dizziness can mean in heart failure.",
    videos: [
      {
        slug: "health-status",
        title: "Health Status",
        youtubeId: "5TqT6OMnCbE",
        description:
          "Explains the KCCQ-12 symptom survey and how repeated check-ins help your care team understand how you are doing over time.",
        context:
          "Best when you want to understand why symptom surveys matter and how they can shape discussions with your care team.",
        placements: ["resources"],
      },
      {
        slug: "dizziness",
        title: "Dizziness",
        youtubeId: "d_MVN08JdTs",
        description:
          "Explains common reasons dizziness happens in heart failure and offers tips that can make it easier to manage safely.",
        context:
          "Good to review if symptoms, blood pressure changes, or medications are leaving you lightheaded or unsteady.",
        placements: ["hf-basics", "resources"],
      },
    ],
  },
];

export const resourceItems: ResourceItem[] = [
  {
    slug: "vitals-tracker",
    title: "Vitals tracker",
    kind: "printable",
    href: "/printables/vitals",
    description:
      "Printable daily tracker for weight, blood pressure, heart rate, symptoms, and whether medications were taken.",
    printable: true,
    external: false,
  },
  {
    slug: "appointment-log",
    title: "Appointment log",
    kind: "printable",
    href: "/printables/appointments",
    description:
      "Bring this sheet to every visit so you can record questions, medication changes, tests, and next steps.",
    printable: true,
    external: false,
  },
  {
    slug: "hospital-log",
    title: "Hospitalization or ED visit log",
    kind: "printable",
    href: "/printables/hospital-visits",
    description:
      "Track what happened during an emergency or hospital visit, including medication changes and follow-up plans.",
    printable: true,
    external: false,
  },
  {
    slug: "share-hf",
    title: "SHARE-HF decision aid",
    kind: "external",
    href: "https://decisionaid.ca/share-hf/",
    description:
      "Shared decision-making resource to help patients and care teams talk through treatment options together.",
    printable: false,
    external: true,
  },
  {
    slug: "crisis-line",
    title: "Veterans Crisis Line",
    kind: "guide",
    href: "https://www.veteranscrisisline.net/",
    description:
      "Immediate support for Veterans in crisis. Call 988 and press 1, text 838255, or chat online.",
    printable: false,
    external: true,
  },
];
