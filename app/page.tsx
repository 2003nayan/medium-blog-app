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
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent">
          Welcome to Simple Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Exploring modern web development, best practices, and developer
          insights.
        </p>
      </div>

      {/* Posts Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No posts yet. Run the seed command!
          </p>
          <code className="mt-4 inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded text-sm">
            npx prisma db seed
          </code>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {posts.map((post: typeof posts[number]) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
