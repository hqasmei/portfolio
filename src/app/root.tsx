import React from 'react';

import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from 'react-router';

import type { Route } from './+types/root';

import '@/styles/app.css';

import config from '@/config';
import { ThemeProvider, useTheme } from '@/contexts/theme';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,100..900;1,100..900&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/theme-toggles@4.10.1/css/simple.min.css',
  },
];

function LayoutContent({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-background text-foreground flex min-h-screen flex-col">
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 py-6">
          <header className="mx-4 flex items-center justify-between">
            <Link to="/">
              <div className="group flex items-center gap-4">
                <img
                  src={config.headshot}
                  alt={config.name}
                  className="h-12 w-12 rounded-full transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
                />
                <div className="flex flex-col">
                  <p className="font-medium">{config.name}</p>
                  <p className="text-muted-foreground hidden font-light sm:block">
                    {config.title}
                  </p>
                </div>
              </div>
            </Link>
            <div className="flex gap-4">
              <Link
                to="/projects"
                className={`hover:text-foreground transition-colors ${
                  location.pathname.startsWith('/projects')
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/posts"
                className={`hover:text-foreground transition-colors ${
                  location.pathname.startsWith('/posts')
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground'
                }`}
              >
                Posts
              </Link>
              <button
                onClick={toggleTheme}
                className="group cursor-pointer"
                title="Toggle theme"
                aria-label="Toggle theme"
              >
                <div className="bg-foreground h-4 w-4 rounded duration-200 group-hover:scale-110 group-active:scale-95" />
              </button>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-border mx-4 border-t pt-8">
            <div className="text-muted-foreground flex flex-col items-center gap-4 text-sm sm:flex-row sm:justify-between">
              <div className="flex items-center gap-4">
                <span>
                  © {new Date().getFullYear()} {config.name}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {config.social.map((social, idx) => (
                  <React.Fragment key={idx}>
                    <a
                      href={social.link}
                      {...(social.platform !== 'Email' && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                      className="hover:text-foreground transition-colors duration-200"
                    >
                      <span>{social.platform}</span>
                    </a>
                    {idx < config.social.length - 1 && <span>•</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </footer>
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// Main Layout component wraps everything with ThemeProvider
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
