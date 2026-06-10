import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const chunkGroups = [
  {
    name: "vendor-react",
    tests: [
      /node_modules\/react(\/|$)/,
      /node_modules\/react-dom(\/|$)/,
      /node_modules\/react-router-dom(\/|$)/,
      /node_modules\/@tanstack\/react-query(\/|$)/,
    ],
  },
  {
    name: "vendor-animations",
    tests: [/node_modules\/gsap(\/|$)/, /node_modules\/locomotive-scroll(\/|$)/],
  },
  {
    name: "vendor-charts",
    tests: [/node_modules\/recharts(\/|$)/],
  },
  {
    name: "vendor-icons",
    tests: [
      /node_modules\/@phosphor-icons\/react(\/|$)/,
      /node_modules\/lucide-react(\/|$)/,
      /node_modules\/react-icons(\/|$)/,
    ],
  },
  {
    name: "vendor-ui",
    tests: [
      /node_modules\/@radix-ui\//,
      /node_modules\/cmdk(\/|$)/,
      /node_modules\/sonner(\/|$)/,
      /node_modules\/next-themes(\/|$)/,
      /node_modules\/embla-carousel-react(\/|$)/,
      /node_modules\/input-otp(\/|$)/,
      /node_modules\/react-day-picker(\/|$)/,
      /node_modules\/react-resizable-panels(\/|$)/,
      /node_modules\/react-hook-form(\/|$)/,
      /node_modules\/zod(\/|$)/,
      /node_modules\/vaul(\/|$)/,
      /node_modules\/class-variance-authority(\/|$)/,
      /node_modules\/tailwind-merge(\/|$)/,
      /node_modules\/clsx(\/|$)/,
      /node_modules\/date-fns(\/|$)/,
      /node_modules\/@hookform\/resolvers(\/|$)/,
    ],
  },
];

const getManualChunk = (id: string) => {
  if (!id.includes("node_modules")) {
    return undefined;
  }

  for (const group of chunkGroups) {
    if (group.tests.some((test) => test.test(id))) {
      return group.name;
    }
  }

  return undefined;
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    rollupOptions: {
      output: {
        manualChunks: getManualChunk,
      },
    },
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
