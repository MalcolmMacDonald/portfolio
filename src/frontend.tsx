/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { createRoot } from "react-dom/client";
import App from "./App";

const env = await fetch("/env.json").then(r => r.json()).catch(() => ({}));
(window as any).__ENV__ = env;

createRoot(document.getElementById('root')!).render(
    <App />
);