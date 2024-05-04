export default function SkeletonUserCard() {
  return (
    <section className="w-[calc(100vw-75px)] animate-pulse rounded-lg border p-6 transition-opacity hover:opacity-80 md:w-96">
      <div className="flex flex-col gap-y-3 opacity-50">
        <div className="h-7 w-40 rounded-xl bg-white"></div>
        <div className="h-3 w-60 rounded-xl bg-white"></div>
      </div>
      <hr className="my-5 opacity-40"></hr>
      <div className="flex flex-col gap-y-3 opacity-50">
        <div className="h-5 w-28 rounded-xl bg-white"></div>
        <div className="h-2 w-44 rounded-xl bg-white"></div>
      </div>
    </section>
  );
}
