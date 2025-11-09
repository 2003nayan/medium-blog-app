"use client";

import Link from "next/link";
import { calculateReadingTime, generatePreview } from "@/lib/utils";

interface Post {
  id: string;
  title: string;
  content: string;
  date: Date;
}

export default function PostCard({ post }: { post: Post }) {
  // Extract preview text (first 150 characters)
  const preview = generatePreview(post.content, 150);

  // Calculate reading time (average 200 words per minute)
  const readingTime = calculateReadingTime(post.content);

  return (
    <Link href={`/posts/${post.id}`} className="group">
      <article className="h-full flex flex-col border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300 bg-white dark:bg-gray-800">
        {/* Date & Reading Time */}
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <time dateTime={post.date.toISOString()}>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>•</span>
          <span>{readingTime} min read</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {post.title}
        </h2>

        {/* Preview */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 grow line-clamp-3">{preview}</p>

        {/* Read More Link */}
        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:gap-2 transition-all">
          <span>Read more</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </article>
    </Link>
  );
}
