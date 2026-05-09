import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-text-primary mb-4">404</h1>
        <p className="text-text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
