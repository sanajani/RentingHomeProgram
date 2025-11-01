import InputBox from "../formsRelated/InputBox";
import SelectBoxProvinces from "./SelectBoxProvinces";
import SelectBoxHomeType from "./SelectBoxHomeType";
import TextBox from "./TextBox";

const Search = () => {
  return (
    <div className="absolute top-0 left-0 min-h-screen bg-gray-900 w-full ">
      <div className="flex justify-center mt-4 flex-col items-center gap-5 w-4/5 mx-auto">
      <div className="w-full">
        <h1 className="mb-1">Which Province:</h1>
        <SelectBoxProvinces />
      </div>
      <div className="w-full">
        <h1 className="mb-1">house type</h1>
        <SelectBoxHomeType />
      </div>
      <div className="w-full">
        <label htmlFor="rooms_data" className="mb-1 block">How Many Rooms</label>
        <InputBox
          id='rooms_data'
          max={30}
          min={1}
          type="number"
          placeholder="number of rooms just Number"
          />
      </div>
      <div className="w-full">
        <label htmlFor="rooms_data" className="mb-1 block">کابل کارته سه </label>
        <InputBox type="text" placeholder="karte-3" />
      </div>
      <div className="w-full">
        <h1 className="mb-1">full infromation</h1>
        <TextBox />
      </div>      
      </div>
    </div>
  );
};

export default Search;
