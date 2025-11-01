
const ReactIcon = ({Icon, size, onIconClick,style=''}) => {
  return (
    <button
        className={'font-bold md:hidden cursor-pointer' + style}
        aria-label="open menu"
        onClick={onIconClick}
    >
        <Icon size={size} />
    </button>
  )
}

export default ReactIcon