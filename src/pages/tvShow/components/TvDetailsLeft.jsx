export default function TvDetailsLeft({ pic }) {
  return (
    <>
      <div className="lg:col-span-2 md:col-span-3 col-span-1  overflow-hidden rounded-xl w-[100%]">
        <img
          src={`https://image.tmdb.org/t/p/original${pic}`}
          alt={`https://image.tmdb.org/t/p/original${pic}`}
          className="hover:scale-110  transition-all duration-200 rounded-md"
        />
      </div>
    </>
  );
}
