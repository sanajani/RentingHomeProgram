import { afghanistanProvinces } from "../utilities/provinceNamesConfig";

const SelectBox = () => {
  return (
    <div className="w-full mb-2">
      <select name="" id="" 
      className="text-white py-2 rounded-md bg-gray-600 w-full border-none outline-none">
        {afghanistanProvinces.map((item, index) => {
          return (
            <option className="" key={item.id} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectBox;
