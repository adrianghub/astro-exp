/** @type {import('tailwindcss').Config} */

function resolveHex(variableName) {
    return `var(${variableName})`;
}

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px'
    },
    textColor: {
      skin: {
        base: resolveHex("--color-text-base"),
        accent: resolveHex("--color-accent"),
        inverted: resolveHex("--color-fill"),
      },
    },
    backgroundColor: {
      skin: {
        fill: resolveHex("--color-fill"),
        accent: resolveHex("--color-accent"),
        inverted: resolveHex("--color-text-base"),
        card: resolveHex("--color-card"),
        "card-muted": resolveHex("--color-card-muted"),
      },
    },
    outlineColor: {
      skin: {
        fill: resolveHex("--color-accent"),
      },
    },
    borderColor: {
      skin: {
        line: resolveHex("--color-border"),
        fill: resolveHex("--color-text-base"),
        accent: resolveHex("--color-accent"),
      },
    },
    fill: {
      skin: {
        base: resolveHex("--color-text-base"),
        accent: resolveHex("--color-accent"),
      },
      transparent: "transparent",
    },
    fontFamily: {
      consola: ['Inconsolata', 'monospace']
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
