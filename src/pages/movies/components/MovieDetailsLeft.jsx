import defaultPic from "./../../../assets/defaultPic.jpg";
export default function MovieDetailsLeft({ pic }) {
  const path = `https://image.tmdb.org/t/p/original${pic}`;
  return (
    <>
      <div className=" overflow-hidden rounded-xl lg:w-1/3 w-[100%] flex justify-center items-center p-2 ">
        <img
          src={`${pic ? path : defaultPic}`}
          alt={`https://image.tmdb.org/t/p/original${pic}`}
          className="hover:scale-110  transition-all duration-200 rounded-md w-[300px]"
        />
      </div>
    </>
  );
}
