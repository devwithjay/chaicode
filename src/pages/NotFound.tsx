'use client';

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[var(--surface-primary)] px-6 py-20 text-center">
      <h1 className="text-6xl font-bold text-[var(--text-brand)] md:text-7xl">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-[var(--text-secondary)]">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 inline-block rounded-lg bg-[var(--surface-brand)] px-6 py-3 text-white transition hover:bg-[var(--surface-brand-hover)]"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;
