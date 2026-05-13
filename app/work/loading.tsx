export default function WorkLoading() {
  return (
    <div className="max-w-4xl mx-4 mt-6 lg:mx-auto px-2 md:px-0 animate-pulse">

      {/* Hero */}
      <section className="pt-4 pb-16">
        <div className="h-3 w-40 bg-neutral-200 dark:bg-neutral-800 rounded mb-6" />
        <div className="h-12 w-32 bg-neutral-200 dark:bg-neutral-800 rounded mb-4" />
        <div className="space-y-2 mb-10">
          <div className="h-4 w-full max-w-2xl bg-neutral-200 dark:bg-neutral-800 rounded" />
          <div className="h-4 w-5/6 max-w-2xl bg-neutral-200 dark:bg-neutral-800 rounded" />
          <div className="h-4 w-4/6 max-w-2xl bg-neutral-200 dark:bg-neutral-800 rounded" />
        </div>
        <div className="flex gap-5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-5 h-5 bg-neutral-200 dark:bg-neutral-800 rounded" />
          ))}
        </div>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800" />

      {/* Projects */}
      <section className="py-16">
        <div className="h-3 w-28 bg-neutral-200 dark:bg-neutral-800 rounded mb-3" />
        <div className="h-8 w-36 bg-neutral-200 dark:bg-neutral-800 rounded mb-8" />

        {[...Array(3)].map((_, i) => (
          <div key={i} className="py-16">
            <div className="h-24 w-20 bg-neutral-100 dark:bg-neutral-900 rounded mb-2" />
            <div className="flex flex-col md:flex-row md:gap-8">
              <div className="md:w-[75%] flex-shrink-0 rounded-lg overflow-hidden mb-8 md:mb-0 bg-neutral-200 dark:bg-neutral-800 aspect-[900/650]" />
              <div className="flex flex-col justify-center gap-3 min-w-0">
                <div className="h-6 w-48 bg-neutral-200 dark:bg-neutral-800 rounded" />
                <div className="h-3 w-24 bg-neutral-200 dark:bg-neutral-800 rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-neutral-200 dark:bg-neutral-800 rounded" />
                  <div className="h-4 w-5/6 bg-neutral-200 dark:bg-neutral-800 rounded" />
                </div>
                <div className="flex gap-2">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="h-6 w-16 bg-neutral-100 dark:bg-neutral-800 rounded" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
