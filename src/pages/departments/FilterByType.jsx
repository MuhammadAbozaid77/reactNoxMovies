import Select from "react-select";
import useGetGeners from "../../hooks/useGetGeners";

export default function FilterByType() {
  const options = [
    { value: "1", label: "Movies" },
    { value: "2", label: "TV" },
  ];

  const {isLoading} = useGetGeners();
  const handelselect = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="">
        <Select
          //   isClearable={true}
          //   isLoading={true}
          //   isDisabled={true}
          className="w-[200px] "
          options={options}
          onChange={handelselect}
        />
      </div>
    </>
  );
}
