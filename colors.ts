export const Colors = {
  light: {
    // Primary — pure black with depth gradient container
    primary: '#000000',
    primaryLight: '#1a1b20',
    primaryDark: '#000000',
    primaryContainer: '#1a1b20',

    // Secondary — warm stone chip container
    secondary: '#46464b',
    secondaryLight: '#6e6e73',
    secondaryDark: '#2c2c2e',
    secondaryContainer: '#e4e2e1',

    // Tertiary — kept neutral, not a vivid accent
    tertiary: '#46464b',
    tertiaryLight: '#6e6e73',
    tertiaryDark: '#2c2c2e',

    // Semantic — understated, typography-driven communication
    success: '#2d6a4f',
    successLight: '#d8f3dc',
    warning: '#7d5a00',
    warningLight: '#fff3cd',
    error: '#ba1a1a',
    errorLight: '#ffdad6',
    info: '#46464b',
    infoLight: '#eceef1',

    // Surface hierarchy (tonal layers — no borders)
    background: '#f8f9fc',           // base layer
    surface: '#f8f9fc',              // base layer
    surfaceContainerLowest: '#ffffff', // elevated interactive elements
    surfaceContainerLow: '#f2f4f7',  // subtle section separation
    surfaceContainer: '#eceef1',     // primary content area
    surfaceContainerHigh: '#e6e8eb', // deeper nesting
    surfaceContainerHighest: '#dde1e6', // secondary button bg, input focus
    surfaceElevated: '#ffffff',      // alias for lowest (modals, cards)
    card: '#ffffff',

    // Ghost border — only for accessibility fallback (15% opacity)
    border: 'rgba(0, 0, 0, 0.15)',
    borderLight: 'rgba(0, 0, 0, 0.08)',
    separator: 'rgba(0, 0, 0, 0.06)',

    // Typography
    text: '#000000',                 // on-surface primary
    textSecondary: '#46464b',        // on-surface-variant
    textMuted: '#6e6e73',
    textInverse: '#ffffff',

    // Icons
    icon: '#46464b',
    iconActive: '#000000',

    // Overlays & shadows (ambient, diffused)
    overlay: 'rgba(25, 28, 30, 0.4)',
    shadow: 'rgba(25, 28, 30, 0.06)',
    shadowModal: 'rgba(25, 28, 30, 0.06)', // 0px 20px 40px spec

    // Glassmorphism
    glassBackground: 'rgba(248, 249, 252, 0.70)',
  },
  dark: {
    // Primary — white on deep black (inverted atelier)
    primary: '#ffffff',
    primaryLight: '#e4e4e4',
    primaryDark: '#ffffff',
    primaryContainer: '#1a1b20',

    // Secondary
    secondary: '#b0b0b5',
    secondaryLight: '#8e8e93',
    secondaryDark: '#d0d0d5',
    secondaryContainer: '#2c2c2e',

    // Tertiary
    tertiary: '#b0b0b5',
    tertiaryLight: '#8e8e93',
    tertiaryDark: '#d0d0d5',

    // Semantic — muted to match editorial restraint
    success: '#4ade80',
    successLight: '#1a3a28',
    warning: '#fbbf24',
    warningLight: '#3a2a00',
    error: '#f87171',
    errorLight: '#3a1010',
    info: '#b0b0b5',
    infoLight: '#1a1b20',

    // Surface hierarchy
    background: '#000000',
    surface: '#0a0a0a',
    surfaceContainerLowest: '#1a1a1a',
    surfaceContainerLow: '#141414',
    surfaceContainer: '#1c1c1e',
    surfaceContainerHigh: '#242426',
    surfaceContainerHighest: '#2c2c2e',
    surfaceElevated: '#1a1a1a',
    card: '#1c1c1e',

    // Ghost border
    border: 'rgba(255, 255, 255, 0.15)',
    borderLight: 'rgba(255, 255, 255, 0.08)',
    separator: 'rgba(255, 255, 255, 0.06)',

    // Typography
    text: '#f9fafb',
    textSecondary: '#aeaeb2',
    textMuted: '#6e6e73',
    textInverse: '#000000',

    // Icons
    icon: '#aeaeb2',
    iconActive: '#ffffff',

    // Overlays & shadows
    overlay: 'rgba(0, 0, 0, 0.6)',
    shadow: 'rgba(0, 0, 0, 0.20)',
    shadowModal: 'rgba(0, 0, 0, 0.30)',

    // Glassmorphism
    glassBackground: 'rgba(10, 10, 10, 0.70)',
  },
} as const;

export type ThemeColors = typeof Colors.light;
export type ColorName = keyof ThemeColors;
