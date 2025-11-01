import InputBox from "../formsRelated/InputBox";
import SelectBoxProvinces from "./SelectBoxProvinces";
import SelectBoxHomeType from "./SelectBoxHomeType";

const Search = () => {
  
  return (
    <div className="absolute top-0 left-0 min-h-screen bg-gray-900 w-full ">
      <div className="flex justify-center mt-4 flex-col items-center gap-5 w-4/5 mx-auto">
          <SelectBoxProvinces />

          <SelectBoxHomeType />

          <InputBox
            max={30}
            min={1}
            type="number"
            placeholder="Enter number of rooms just Number"
          />

      </div>
    </div>
  );
};

export default Search;
