export default function Loading() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Back button skeleton */}
        <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8" />

        <article className="max-w-3xl mx-auto">
          {/* Title skeleton */}
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4 animate-pulse" />
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-8 animate-pulse" />

          {/* Metadata skeleton */}
          <div className="flex gap-4 mb-12">
            <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>

          {/* Content skeleton */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5 animate-pulse" />
          </div>
        </article>
      </div>
    </div>
  );
}
