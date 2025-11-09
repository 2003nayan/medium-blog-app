import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

// Load Inter font - professional, highly readable
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Prevents FOUT (Flash of Unstyled Text)
});

export const metadata: Metadata = {
  title: "Insightful | Modern Web Development",
  description:
    "A minimalist blog showcasing Next.js 16, React 19, Prisma, and MongoDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-stone-200/50 dark:border-stone-700/50 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md shadow-sm dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.3)]">
          <nav className="container mx-auto px-4 py-4 max-w-[1400px]">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                // className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                className="text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-300 dark:hover:to-purple-300 transition-all"
                style={{ letterSpacing: "-0.02em" }}
              >
                Insightful
              </Link>
              <div className="flex items-center gap-6 md:gap-8">
                <Link
                  href="/"
                  className="text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group hidden sm:block"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full" />
                </Link>
                <a
                  href="https://github.com/2003nayan/medium-blog-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group hidden sm:block"
                >
                  GitHub
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full" />
                </a>
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen bg-white dark:bg-stone-900">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
          <div className="container mx-auto px-4 py-12 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Brand Section */}
              <div>
                <h3 className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-3">
                  Insightful
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  A modern platform for sharing stories, insights, and ideas
                  that inspire the developer community.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-3 uppercase tracking-wide">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://github.com/2003nayan/medium-blog-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                    >
                      GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-3 uppercase tracking-wide">
                  Built With
                </h4>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  Next.js 16 • React 19 • TypeScript • Tailwind CSS 4 • Prisma •
                  MongoDB
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                © 2025 Insightful. All rights reserved.
              </p>
              <p className="text-stone-500 dark:text-stone-500 text-xs">
                Created for OneStop ESG Assignment
              </p>
              <p className="text-stone-500 dark:text-stone-500 text-xs">
                Developed by Nayan Katiyara
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
