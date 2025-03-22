/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Enable Just-In-Time mode
  darkMode: ["class"], // Enable dark mode with the 'dark' class
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Core dark mode colors
        border: "hsl(var(--border, 240 5% 20%))", // Subtle dark gray-blue
        input: "hsl(var(--input, 240 5% 15%))", // Darker input background
        ring: "hsl(var(--ring, 260 80% 60%))", // Vibrant purple ring
        background: "hsl(var(--background, 240 10% 10%))", // Deep dark background
        foreground: "hsl(var(--foreground, 0 0% 95%))", // Near-white text

        // Primary and Secondary
        primary: {
          DEFAULT: "hsl(var(--primary, 260 70% 50%))", // Rich purple
          foreground: "hsl(var(--primary-foreground, 0 0% 98%))", // Near-white
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 200 90% 45%))", // Bright cyan
          foreground: "hsl(var(--secondary-foreground, 0 0% 98%))",
        },

        // Utility colors
        destructive: {
          DEFAULT: "hsl(var(--destructive, 0 85% 45%))", // Deep red
          foreground: "hsl(var(--destructive-foreground, 0 0% 98%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 240 5% 40%))", // Soft gray
          foreground: "hsl(var(--muted-foreground, 240 5% 80%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 280 80% 60%))", // Vibrant magenta
          foreground: "hsl(var(--accent-foreground, 0 0% 98%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, 240 10% 15%))", // Slightly lighter than bg
          foreground: "hsl(var(--popover-foreground, 0 0% 95%))",
        },
        card: {
          DEFAULT: "hsl(var(--card, 240 10% 12%))", // Subtle card background
          foreground: "hsl(var(--card-foreground, 0 0% 95%))",
        },

        // Teal accents replacing gold
        teal: {
          light: "#4ecdc4", // Light teal
          DEFAULT: "#26a69a", // Rich teal
          dark: "#1b746c", // Deep teal
        },
        textTeal: "#40c4ff", // Bright teal text (slightly cyan-leaning for contrast)
        textDark: "#2c3e50", // Dark text for light mode fallback
        textBlack: "#000000", // Kept as is
      },
      borderRadius: {
        lg: "var(--radius, 0.75rem)",
        md: "calc(var(--radius, 0.75rem) - 2px)",
        sm: "calc(var(--radius, 0.75rem) - 4px)",
      },
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
      backgroundImage: {
        'teal-gradient': "linear-gradient(90deg, #4ecdc4, #26a69a)", // Teal gradient replacing gold
        'dark-gradient': "linear-gradient(135deg, #1e1e2f, #2a2a3d)", // Dark theme gradient
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        ".line-clamp-1": {
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "1",
        },
        ".line-clamp-2": {
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "2",
        },
        ".line-clamp-3": {
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "3",
        },
      };
      addUtilities(newUtilities);
    },
    require("tailwindcss-animate"),
  ],
};