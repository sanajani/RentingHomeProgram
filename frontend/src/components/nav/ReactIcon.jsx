
const ReactIcon = ({Icon, size, onIconClick,style}) => {
  return (
    <button
        className={style}
        aria-label="open menu"
        onClick={onIconClick}
    >
        <Icon size={size} />
    </button>
  )
}

export default ReactIcon