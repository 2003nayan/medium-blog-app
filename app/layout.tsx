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
  title: "Simple Blog | Modern Web Development",
  description: "A minimalist blog showcasing Next.js 16, React 19, Prisma, and MongoDB",
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
        <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm dark:shadow-gray-800/50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-300 dark:hover:to-purple-300 transition-all"
              >
                Simple Blog
              </Link>
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                >
                  Home
                </Link>
                <a
                  href="https://github.com/2003nayan/medium-blog-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                >
                  GitHub
                </a>
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen bg-white dark:bg-gray-900">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                © 2025 Simple Blog. Built with Next.js 16, React 19 & Prisma.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Assignment for OneStop ESG
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
