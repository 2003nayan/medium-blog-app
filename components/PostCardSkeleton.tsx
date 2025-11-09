export default function PostCardSkeleton({ featured = false }: { featured?: boolean }) {
  return (
    <div
      className={`skeleton-card ${
        featured ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
    >
      <article
        className={`h-full flex flex-col border border-stone-200 dark:border-stone-700 rounded-2xl overflow-hidden bg-white dark:bg-stone-900 ${
          featured ? 'md:flex-row md:gap-8' : ''
        }`}
      >
        <div className={`flex flex-col ${featured ? 'p-8 md:p-10' : 'p-6'} w-full`}>
          {/* Featured Badge Skeleton */}
          {featured && (
            <div className="mb-4">
              <div className="skeleton h-6 w-24 rounded-full" />
            </div>
          )}

          {/* Date & Reading Time Skeleton */}
          <div className="flex items-center gap-3 mb-4">
            <div className="skeleton h-4 w-28" />
            <div className="skeleton h-4 w-4 rounded-full" />
            <div className="skeleton h-4 w-20" />
          </div>

          {/* Title Skeleton */}
          <div className="mb-4 space-y-3">
            <div className={`skeleton ${featured ? 'h-10' : 'h-8'} w-full`} />
            <div className={`skeleton ${featured ? 'h-10' : 'h-8'} w-3/4`} />
          </div>

          {/* Preview Skeleton */}
          <div className="mb-6 space-y-2">
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-2/3" />
          </div>

          {/* Read More Skeleton */}
          <div className="skeleton h-5 w-24 mt-auto" />
        </div>
      </article>
    </div>
  );
}
