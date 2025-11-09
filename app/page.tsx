import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard";

// This is a Server Component - it runs on the server
export default async function HomePage() {
  // Fetch all posts from database
  const posts = await prisma.post.findMany({
    orderBy: { date: "desc" }, // Newest first
    select: {
      id: true,
      title: true,
      content: true,
      date: true,
    },
  });

  return (
    <div className="container mx-auto px-4 py-16 md:py-20 max-w-[1400px]">
      {/* Hero Section */}
      <div className="max-w-4xl mb-20 md:mb-24">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-stone-900 dark:text-stone-100 animate-fade-in"
          style={{
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
          }}
        >
          Stories that matter.{' '}
          <span className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Insights that inspire.
          </span>
        </h1>
        <p
          className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl"
          style={{ lineHeight: '1.6' }}
        >
          Exploring modern web development, design patterns, and the craft of
          building exceptional digital experiences.
        </p>
      </div>

      {/* Posts Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-20 bg-stone-50 dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-700">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-stone-300 dark:text-stone-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="text-stone-500 dark:text-stone-400 text-lg mb-4 font-medium">
            No posts yet. Run the seed command to get started!
          </p>
          <code className="inline-block bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 px-6 py-3 rounded-lg text-sm font-mono border border-stone-200 dark:border-stone-700">
            npx prisma db seed
          </code>
        </div>
      ) : (
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: typeof posts[number], index: number) => (
            <PostCard key={post.id} post={post} featured={index === 0} />
          ))}
        </div>
      )}
    </div>
  );
}
