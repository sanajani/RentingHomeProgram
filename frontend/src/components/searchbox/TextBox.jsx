
const TextBox = ({className,}) => {
  return (
    <div className="w-full min-h-28">
        <textarea name="" id="" placeholder="خانه در کابل کارته سه یا چهار حداقل چهار اطاقه باشه " 
        // className="border w-full border-none outline"
        className={`
            text-base 
            p-3 
            rounded-lg 
            outline-none 
            bg-gray-700 text-white 
            w-full 
            max-h-48
            placeholder:text-gray-50 border
             border-gray-300 
             focus:ring-2 
             focus:ring-blue-500 
             focus:border-transparent 
             hover:border-gray-400 
             transition-colors
              disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
        >
        </textarea>
    </div>
  )
}

export default TextBox