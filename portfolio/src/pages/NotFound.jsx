import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-primary-400 text-sm mb-4">// 404</p>
      <h1 className="text-3xl sm:text-4xl font-display font-semibold mb-3">Page not found</h1>
      <p className="text-ink-muted mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link to="/" className="btn-primary">
        Back to home
      </Link>
    </div>
  );
}
