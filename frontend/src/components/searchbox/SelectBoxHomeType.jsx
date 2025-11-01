
const SelectBoxHomeType = () => {
  return (
    <div className="w-full">
        <select name="homeType" id="homeType-select"
      className="text-white py-2 max-w-5/6 w-4/5  rounded-lg bg-gray-700 border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-gray-600 transition-colors cursor-pointer"
        >
            <option value="">Choose House Type</option>
            <option value="both">Both</option>
            <option value="building">Building</option>
            <option value="havily">Havily</option>
        </select>
    </div>
  )
}

export default SelectBoxHomeType