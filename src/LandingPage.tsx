export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-2">
            <h1 className="text-4xl font-bold">Malcolm MacDonald</h1>
            <p className="text-gray-400">Software Developer</p>
            <a
                href="/dev"
                className="mt-8 text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
                dev
            </a>
        </div>
    );
}
