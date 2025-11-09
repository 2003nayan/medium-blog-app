"use client";

import Link from "next/link";
import { calculateReadingTime, generatePreview } from "@/lib/utils";

interface Post {
  id: string;
  title: string;
  content: string;
  date: Date;
}

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  // Extract preview text - longer for featured posts
  const preview = generatePreview(post.content, featured ? 270 : 150);

  // Calculate reading time (average 200 words per minute)
  const readingTime = calculateReadingTime(post.content);

  return (
    <Link
      href={`/posts/${post.id}`}
      className={`group block animate-fade-in ${featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
    >
      <article
        className={`h-full flex flex-col border border-stone-200 dark:border-stone-700 rounded-2xl overflow-hidden transition-all duration-300 bg-white dark:bg-stone-900 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1 ${
          featured ? 'md:flex-row md:gap-8' : ''
        }`}
        style={{
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        {/* Card Content */}
        <div className={`flex flex-col ${featured ? 'p-8 md:p-10' : 'p-6'}`}>
          {/* Featured Badge */}
          {featured && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-linear-to-r from-blue-600 to-purple-600 text-white">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </span>
            </div>
          )}

          {/* Date & Reading Time */}
          <div className="flex items-center gap-3 text-sm text-stone-500 dark:text-stone-400 mb-4">
            <time
              dateTime={post.date.toISOString()}
              className="flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="text-stone-300 dark:text-stone-600">•</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readingTime} min read
            </span>
          </div>

          {/* Title */}
          <h2
            className={`font-bold mb-4 text-stone-900 dark:text-stone-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
              featured ? 'text-3xl md:text-4xl lg:text-5xl line-clamp-3' : 'text-xl md:text-2xl line-clamp-2'
            }`}
            style={{
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
            }}
          >
            {post.title}
          </h2>

          {/* Preview */}
          <p
            className={`text-stone-600 dark:text-stone-300 mb-6 leading-relaxed ${
              featured ? 'text-lg line-clamp-4 md:line-clamp-3' : 'text-base line-clamp-3'
            }`}
            style={{
              lineHeight: '1.7',
            }}
          >
            {preview}
          </p>

          {/* Read More Link */}
          <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
            <span>Read article</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
