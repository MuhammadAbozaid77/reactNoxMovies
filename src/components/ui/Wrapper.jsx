export default function Wrapper({ children, classesName }) {
  return (
    <>
      <div
        className={` xl:px-[200px] lg:px-[100px] md:px-8 px-4 ${classesName}`}
      >
        {children}
      </div>
    </>
  );
}
