import style from "./../../styles/SpinnerLoading.module.css";

export default function SpinnerLoading() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-[200px]">
      <span className={`${style.loader}`}></span>
    </div>
  );
}
