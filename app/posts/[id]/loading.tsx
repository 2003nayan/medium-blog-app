export default function Loading() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-[1400px]">
        {/* Back button skeleton */}
        <div className="skeleton h-6 w-28 rounded mb-12" />

        <article className="max-w-[780px] mx-auto bg-white dark:bg-stone-900 rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <header className="px-8 md:px-12 pt-12 md:pt-16 pb-8 border-b border-stone-200 dark:border-stone-800">
            {/* Title skeleton */}
            <div className="space-y-4 mb-8">
              <div className="skeleton h-12 w-full rounded" />
              <div className="skeleton h-12 w-4/5 rounded" />
              <div className="skeleton h-12 w-3/5 rounded" />
            </div>

            {/* Metadata skeleton */}
            <div className="flex gap-5">
              <div className="skeleton h-5 w-32 rounded" />
              <div className="skeleton h-5 w-4 rounded-full" />
              <div className="skeleton h-5 w-24 rounded" />
            </div>
          </header>

          {/* Content skeleton */}
          <div className="px-8 md:px-12 py-12 md:py-16">
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`skeleton h-4 rounded ${
                    i % 4 === 3 ? 'w-3/4' : 'w-full'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Footer skeleton */}
          <footer className="px-8 md:px-12 pb-12 pt-8 border-t border-stone-200 dark:border-stone-800">
            <div className="flex justify-between items-center">
              <div className="skeleton h-12 w-40 rounded-xl" />
              <div className="flex gap-3">
                <div className="skeleton h-9 w-9 rounded-lg" />
                <div className="skeleton h-9 w-9 rounded-lg" />
                <div className="skeleton h-9 w-9 rounded-lg" />
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
