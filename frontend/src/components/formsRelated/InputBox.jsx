
const InputBox = ({type,placeholder,className='',...props}) => {
  return (
    <input
        {...props}
        type={type}
        className={`
            text-base 
            p-3 
            rounded-lg 
            outline-none 
            bg-gray-700 text-white 
            w-full 
            placeholder:text-gray-50 border
             border-gray-300 
             focus:ring-2 
             focus:ring-blue-500 
             focus:border-transparent 
             hover:border-gray-400 
             transition-colors
              disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
        placeholder={placeholder}
        aria-label={placeholder}
    />  )
}

export default InputBox