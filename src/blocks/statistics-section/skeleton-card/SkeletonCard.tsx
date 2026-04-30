function SkeletonCard({ number }: { number: number }) {
  return (
    <>
      {Array.from({ length: number }).map((_, index) => (
        <div
          key={`skeleton-card-${index}`}
          className='flex flex-col items-center gap-4 rounded-lg py-6 shadow-[0_1px_3px_0px_rgba(0,0,0,0.1),0_1px_2px_0px_rgba(0,0,0,0.06)]'
        >
          <div className='h-12 w-64 animate-pulse rounded bg-neutral-300 transition duration-100'></div>
          <div className='h-6 w-48 animate-pulse rounded bg-neutral-300 transition duration-100'></div>
        </div>
      ))}
    </>
  );
}

export { SkeletonCard };
