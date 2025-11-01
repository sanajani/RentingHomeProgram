import { afghanistanProvinces } from "../../utilities/provinceNamesConfig";

const SelectBoxProvinces = () => {
  return (
    <div className="w-full mb-2">
      <select name="provinces" id="province-select" aria-label="Select province"  
      className="text-white py-2 max-w-5/6 w-4/5  rounded-lg bg-gray-700 border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-gray-600 transition-colors cursor-pointer"
      >
        <option value="">Select a province</option>
        {afghanistanProvinces.map((item, index) => {
          return (
            <option key={item.id} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectBoxProvinces;
