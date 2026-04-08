#!/usr/bin/env bun


import "./index.css";
import {GithubKanban} from "@malcolmmacdonald/github-kanban";
import LandingPage from "./LandingPage";
import * as process from "node:process";


export default function App() {
    const isDev = window.location.pathname.startsWith('/dev');

    if (isDev) {
        return (
            <div style={{ position: 'fixed', inset: 0 }}>
                <GithubKanban
                    repo="MalcolmMacDonald/portfolio"
                    token={process.env.VITE_GITHUB_TOKEN ?? ''}
                    onBack={() => { window.location.href = '/'; }}
                    promoteWorkflow={{ workflowFile: 'promote-to-prod.yml', ref: 'dev' }}
                />
            </div>
        );
    }

    return <LandingPage />;
}

