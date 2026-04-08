#!/usr/bin/env bun


import "./index.css";
import {GithubKanban} from "@malcolm/github-kanban";
import LandingPage from "./LandingPage";


export default function App() {
    const isDev = window.location.pathname.startsWith('/dev');

    if (isDev) {
        return (
            <div style={{ position: 'fixed', inset: 0 }}>
                <GithubKanban
                    repo="MalcolmMacDonald/portfolio"
                    token={(window as any).__ENV__?.VITE_GITHUB_TOKEN ?? import.meta.env.VITE_GITHUB_TOKEN}
                    onBack={() => { window.location.href = '/'; }}
                    promoteWorkflow={{ workflowFile: 'promote-to-prod.yml', ref: 'dev' }}
                />
            </div>
        );
    }

    return <LandingPage />;
}

