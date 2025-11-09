import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { calculateReadingTime, generatePreview, simpleHash } from "@/lib/utils";
import ReadingProgress from "@/components/ReadingProgress";
import PostCard from "@/components/PostCard";

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
      title: "Post Not Found | Insightful",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Insightful`,
    description: generatePreview(post.content, 160),
  };
}

// This tells Next.js what paths to pre-render at build time
export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    select: { id: true },
  });

  return posts.map((post: (typeof posts)[number]) => ({
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
  const paragraphs = post.content
    .split("\n\n")
    .filter((p: string) => p.trim().length > 0);

  // Fetch related posts (other recent posts, excluding current)
  const relatedPosts = await prisma.post.findMany({
    where: {
      id: { not: id },
    },
    orderBy: { date: "desc" },
    take: 3,
    select: {
      id: true,
      title: true,
      content: true,
      date: true,
    },
  });

  type RelatedPost = (typeof relatedPosts)[number];

  return (
    <>
      <ReadingProgress />
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-[1400px]">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 mb-12 group font-medium"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All articles
          </Link>

          {/* Article Container */}
          <article className="max-w-[780px] mx-auto bg-white dark:bg-stone-900 rounded-2xl shadow-lg overflow-hidden animate-fade-in">
            {/* Article Header */}
            <header className="px-8 md:px-12 pt-12 md:pt-16 pb-8 border-b border-stone-200 dark:border-stone-800">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-stone-900 dark:text-stone-100"
                style={{
                  letterSpacing: "-0.03em",
                  lineHeight: "1.1",
                }}
              >
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-5 text-stone-600 dark:text-stone-400 text-sm">
                <time
                  dateTime={post.date.toISOString()}
                  className="flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>

                <span className="text-stone-300 dark:text-stone-700">•</span>

                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {readingTime} min read
                </span>
              </div>
            </header>

            {/* Article Content */}
            <div className="px-8 md:px-12 py-12 md:py-16">
              <div className="prose prose-lg max-w-none">
                {paragraphs.map((paragraph: string, index: number) => (
                  <p
                    key={simpleHash(paragraph)}
                    className={`mb-8 text-stone-700 dark:text-stone-300 leading-relaxed text-lg ${
                      index === 0 ? "first-of-type" : ""
                    }`}
                    style={{
                      lineHeight: "1.8",
                      letterSpacing: "-0.003em",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Article Footer */}
            <footer className="px-8 md:px-12 pb-12 pt-8 border-t border-stone-200 dark:border-stone-800">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to articles
                </Link>
              </div>
            </footer>
          </article>

          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 max-w-[1400px] mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                  You might also like
                </h2>
                <p className="text-stone-600 dark:text-stone-400">
                  More stories from our collection
                </p>
              </div>
              <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost: RelatedPost) => (
                  <PostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
