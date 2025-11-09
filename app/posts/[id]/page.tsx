import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { calculateReadingTime, generatePreview, simpleHash } from "@/lib/utils";

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: { id },
    select: { title: true, content: true },
  });

  if (!post) {
    return {
      title: "Post Not Found | Simple Blog",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Simple Blog`,
    description: generatePreview(post.content, 160),
  };
}

// This tells Next.js what paths to pre-render at build time
export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    select: { id: true },
  });

  return posts.map((post: typeof posts[number]) => ({
    id: post.id,
  }));
}

// Server Component - runs on server
export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await params (Next.js 15+ requirement)
  const { id } = await params;

  // Fetch the specific post
  const post = await prisma.post.findUnique({
    where: { id },
  });

  // If post doesn't exist, show 404
  if (!post) {
    notFound();
  }

  // Calculate reading time
  const readingTime = calculateReadingTime(post.content);

  // Split content into paragraphs
  const paragraphs = post.content.split("\n\n").filter((p: string) => p.trim().length > 0);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8 group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to all posts
        </Link>

        {/* Article Container */}
        <article className="max-w-3xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-gray-100">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300">
              <time
                dateTime={post.date.toISOString()}
                className="flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>

              <span className="text-gray-400 dark:text-gray-500">•</span>

              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {readingTime} min read
              </span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            {paragraphs.map((paragraph: string) => (
              <p key={simpleHash(paragraph)} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to all posts
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
}
