import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <section className="bg-black  flex justify-center items-center h-[100vh]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-gray-500">
            404
          </h1>
          <p className=" text-3xl tracking-tight font-bold text-gray-200 md:text-4xl ">
            S{"omething's"} missing.
          </p>
          <p className="mb-4 text-lg font-semibold text-gray-500">
            Sorry, we {"can't"} find that page. You will find lots to explore on
            the home page.
          </p>
          <Link
            to="home"
            className="inline-flex bg-yellow-500 font-medium rounded-lg text-lg text-white px-5 py-2.5 text-center  my-4"
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
