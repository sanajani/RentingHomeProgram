
const InputBox = ({type,placeholder,style='',...props}) => {
  return (
    <input
        {...props}
        type={type}
        className={`text-base p-3 rounded-full outline-none bg-red-50 text-black w-full placeholder:text-black ${style}`}
        placeholder={placeholder}
        
    />  )
}

export default InputBox