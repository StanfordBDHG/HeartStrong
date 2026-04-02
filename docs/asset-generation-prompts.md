<!--
This source file is part of the Stanford HeartStrong open-source project

SPDX-FileCopyrightText: 2026 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
-->

# HeartStrong Asset Generation Prompts

This prompt pack is the reference for future mascot and supporting illustration work. It keeps the HeartStrong visual language consistent across the Astro site, printables, and any future campaign materials. The current website uses raster mascot cutouts in PNG and WebP formats, not SVG mascot files.

## Style Direction

- Warm, friendly, polished editorial healthcare illustration
- Balanced anatomical heart silhouette with softened asymmetry, expressive eyes, and clean silhouette
- The heart mascot should feel reassuring and energetic, not childish
- Keep mascot surfaces smooth and clean: no paper grain, no watercolor noise, no dusty texture
- Transparent background for mascot-only renders
- No embedded text in any asset
- Keep the mascot cutout separate from boards, booklets, tablets, and other scene props
- Keep all mascots in the same character family: same general outline language, same line weight, same face scale, same vessel grouping logic, and the same pale cream band accent across the upper body
- Avoid clutter, extra background scenery, photorealism, or glossy 3D toy rendering
- Preserve white gloves and simple shoes
- Use a palette that works on cream/light backgrounds and deep navy/dark backgrounds

## Output Specs

- Mascot render: `1600x1600`, transparent PNG
- Supporting prop board or scene element: `1600x1200`, transparent PNG or isolated object on transparent background
- Keep mascot and props separate so the website can layer them responsively
- Leave comfortable negative space around the mascot for cropping and responsive placement
- Export light and dark-friendly scene props when background tones are baked into the asset
- Generate the light asset first, then create the dark asset by editing that exact light asset
- Dark-mode versions must preserve the same scene, object set, composition, spacing, and role as the light asset

## Base Mascot Prompt

```text
Use case: illustration-story
Asset type: website mascot cutout
Primary request: create a polished heart-shaped mascot illustration for the HeartStrong website
Subject: a friendly anthropomorphic red heart mascot with white gloves, simple shoes, expressive eyes, warm smile, and a confident but gentle posture
Style/medium: clean editorial digital illustration with soft shading, subtle highlights, crisp edges, no line-heavy comic style
Composition/framing: centered full-body character with generous transparent padding, easy to crop for responsive web layouts
Lighting/mood: bright, calm, supportive, optimistic
Color palette: rich heart red, soft coral highlights, warm neutrals, white gloves, dark navy accents where helpful
Materials/textures: smooth illustrated surfaces, soft dimensional shading, solid fills, no noisy texture, no paper grain
Constraints: transparent background, no embedded text, no watermark, no additional scenery unless explicitly requested, balanced anatomical heart silhouette with softened asymmetry, same cream band accent and vessel grouping used across the current mascot family
Avoid: photorealism, 3D plastic toy look, childish proportions, generic symmetric icon-heart silhouette, extra props, busy background elements, grain, watercolor paper texture
```

## Page-Specific Mascot Prompts

### Welcome mascot

```text
Use case: illustration-story
Asset type: homepage hero mascot cutout
Primary request: create the HeartStrong heart mascot in a welcoming pose for the homepage
Subject: the heart mascot smiling and waving in a welcoming stance, with empty hands so the website can layer a separate booklet prop if needed
Style/medium: polished editorial healthcare illustration
Composition/framing: full-body character, slightly angled toward the viewer, transparent background
Lighting/mood: inviting, calm, encouraging
Constraints: transparent background, no built-in booklet or board, no text, same family design cues as the other mascots
Avoid: detailed background scenery, extra floating icons, exaggerated cartoon proportions
```

### HF basics mascot

```text
Use case: illustration-story
Asset type: education page mascot cutout
Primary request: create the HeartStrong heart mascot in a teaching pose for the HF basics page
Subject: the heart mascot gesturing like a guide or teacher, one hand open as if explaining an off-frame chart
Style/medium: polished editorial healthcare illustration
Composition/framing: full-body character, transparent background, slightly turned toward an off-frame teaching board
Lighting/mood: knowledgeable, reassuring, clear
Constraints: transparent background, no built-in chart or board, no text, no sweat or distress cues
Avoid: clipart style, lecture podium, complicated equipment, mismatched character design
```

### Goal-setting mascot

```text
Use case: illustration-story
Asset type: interactive activity mascot cutout
Primary request: create the HeartStrong heart mascot as a goal-setting coach
Subject: the heart mascot in an encouraging stance with one hand lifted in celebration and the other ready to point toward a separate checklist or task board
Style/medium: polished editorial healthcare illustration
Composition/framing: full-body cutout, transparent background
Lighting/mood: upbeat, motivating, practical
Constraints: transparent background, no embedded checklist, no text
Avoid: trophy props, confetti overload, childish sports imagery, generic icon-heart silhouette
```

### Treatment mascot

```text
Use case: illustration-story
Asset type: treatment education mascot cutout
Primary request: create the HeartStrong heart mascot in a strength-training pose for the treatment page
Subject: the heart mascot looking determined and supportive, posed like a coach ready for a training session
Style/medium: polished editorial healthcare illustration
Composition/framing: full-body cutout, transparent background, strong silhouette
Lighting/mood: confident, steady, encouraging
Constraints: transparent background, no large gym equipment baked into the asset
Avoid: macho bodybuilder tone, intense aggression, cluttered background, hats, clothing, sweat drops
```

### Resources mascot

```text
Use case: illustration-story
Asset type: resources page mascot cutout
Primary request: create the HeartStrong heart mascot as a helpful resource guide
Subject: the heart mascot standing in a calm, helpful guide pose, ready to be paired with a separate folder or tablet prop
Style/medium: polished editorial healthcare illustration
Composition/framing: full-body cutout with transparent background
Lighting/mood: organized, supportive, clear
Constraints: transparent background, no logos, no text, no complex interface on the tablet
Avoid: office-corporate stock style, generic business props, detailed scene background, hats, mismatched mascot styling
```

### Small support mascot variants

```text
Use case: illustration-story
Asset type: supporting decorative cutout
Primary request: create small web-ready variants of the HeartStrong mascot for supportive accents
Subject: one celebratory version; the website reuses the welcome mascot for the small waving/header treatment to avoid duplicate assets
Style/medium: polished editorial healthcare illustration
Composition/framing: full-body cutout, transparent background, compact silhouette that still reads clearly at small sizes
Lighting/mood: friendly and warm
Constraints: transparent background, no extra props, no text, same shared mascot family design cues as the primary page mascots
Avoid: sticker outlines, exaggerated motion effects, clutter, duplicate role poses that are too close to welcome
```

## Supporting Prop Prompts

These prompts are for separate background objects or boards that the website can layer behind the mascot. Keep props isolated from the character so they can be repositioned independently across breakpoints.

For dark mode, do not generate a new scene from scratch. Edit the light-mode asset and preserve the exact same composition, objects, spacing, and visual role while only adapting palette, glow, and contrast for dark backgrounds.

### Welcome scene prop

```text
Use case: illustration-story
Asset type: supporting scene prop
Primary request: create a soft editorial illustration of a floating booklet board and calm glass-like cards for a patient education homepage
Subject: a rounded booklet panel, small layered cards, soft sparkles, simple shapes suggesting guidance and structure
Style/medium: clean editorial illustration with subtle translucency and smooth gradients
Composition/framing: landscape composition with open center and negative space for a mascot overlay
Constraints: no text, no characters, no logos, no photo textures
Avoid: interface screenshots, busy infographic details
```

### HF basics prop

```text
Use case: illustration-story
Asset type: supporting scene prop
Primary request: create a clean health-education board with charts and simple heart-function visual cues
Subject: rounded chart board, circular diagram, line chart, and calm supporting shapes
Style/medium: clean editorial illustration
Composition/framing: landscape prop with enough negative space for a mascot layered in front
Constraints: no text, no numbers that imply real measurements, no realistic monitor hardware
Avoid: cluttered dashboard UI, medical device realism
```

### Goal-setting prop

```text
Use case: illustration-story
Asset type: supporting scene prop
Primary request: create a goal-setting task board with rounded checklist cards and milestone markers
Subject: a modern rounded planning board with check marks, sticky-note style blocks, and one highlighted goal card
Style/medium: clean editorial illustration with subtle glass-like surfaces
Composition/framing: landscape prop with room for a mascot standing in front of it
Constraints: no text, no calendars with dates, no realistic paper texture
Avoid: productivity app screenshot look, cluttered office objects
```

### Treatment prop

```text
Use case: illustration-story
Asset type: supporting scene prop
Primary request: create a strength-training themed healthcare illustration prop for the treatment page
Subject: a rounded dumbbell, medication tray shapes, progress bars, and a calm coaching board
Style/medium: clean editorial illustration
Composition/framing: landscape prop with clear foreground/background separation for mascot overlay
Constraints: no text, no branded pills, no realistic medicine bottles
Avoid: harsh gym look, intense sports branding, clinical realism
```

### Resources prop

```text
Use case: illustration-story
Asset type: supporting scene prop
Primary request: create a supportive library-and-tools illustration prop for the resources page
Subject: layered folders, printable sheets, cards, and a tablet silhouette arranged in a clean helpful composition
Style/medium: polished editorial illustration
Composition/framing: landscape prop with space for a mascot to stand in front
Constraints: no text, no detailed interface screenshots, no logos
Avoid: corporate dashboard look, chaotic piles of paper
```

## Medication Card Illustration Prompts

Use a consistent illustration system for medication tiles: rounded card background, one central symbol, soft depth, no text.

### ARNI / ACEi / ARB

```text
Use case: illustration-story
Asset type: medication education card art
Primary request: create a calm icon-style illustration representing lowering pressure and making it easier for the heart to pump
Subject: rounded shield or support frame, directional arrow showing reduced strain, heart-support motif
Style/medium: polished editorial illustration, simple and clear
Constraints: no text, no pills with labels, no literal anatomy diagrams
```

### Beta blockers

```text
Use case: illustration-story
Asset type: medication education card art
Primary request: create a calm icon-style illustration representing slowing and steadying the heart
Subject: pulse line, steady rhythm ring, shield or calm wave motif
Style/medium: polished editorial illustration
Constraints: no text, no ECG monitor realism
```

### SGLT2 inhibitors

```text
Use case: illustration-story
Asset type: medication education card art
Primary request: create a calm icon-style illustration representing fluid balance and unloading the heart
Subject: water drop, directional flow arrows, light support frame
Style/medium: polished editorial illustration
Constraints: no text, no realistic organs
```

### MRA

```text
Use case: illustration-story
Asset type: medication education card art
Primary request: create a calm icon-style illustration representing balance, protection, and fluid support
Subject: balanced circles, supportive ring, gentle leaf-or-shield style accent
Style/medium: polished editorial illustration
Constraints: no text, no branded medicine imagery
```

## Dark-Mode Adaptation Prompt

```text
Use case: illustration-story
Asset type: dark-mode adaptation of an existing illustration
Primary request: adapt this exact light-mode illustration for dark mode while preserving the same composition and meaning
Subject: the exact same scene, object set, spacing, and silhouette from the light asset
Style/medium: same illustration style as the source image, with smooth flat shading and crisp outlines
Composition/framing: preserve the exact original composition; do not add, remove, or rearrange objects
Lighting/mood: soft contrast and edge clarity suitable for deep navy backgrounds
Constraints: only adjust palette, contrast, glow, and edge highlights for dark mode; no text; no watermark; no new props
Avoid: new scenes, different roles, missing objects, added objects, grain, paper texture, photorealism, 3D rendering
```
