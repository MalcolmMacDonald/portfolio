import { serve } from "bun";
import index from "./index.html";

const envJson = new Response(
  JSON.stringify({ VITE_GITHUB_TOKEN: process.env.VITE_GITHUB_TOKEN ?? "" }),
  { headers: { "Content-Type": "application/json" } }
);

const server = serve({
  routes: {
    "/env.json": envJson,
    // Serve index.html for all unmatched routes.
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
