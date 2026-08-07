import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-6xl font-semibold text-indigo-rich mb-4">404</h1>
        <h2 className="font-display text-2xl font-semibold text-indigo-rich mb-4">Page Not Found</h2>
        <p className="font-body text-indigo-rich/70 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-indigo-rich text-ivory font-ui text-xs uppercase tracking-button font-semibold px-8 py-3 rounded-sm hover:bg-indigo transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
