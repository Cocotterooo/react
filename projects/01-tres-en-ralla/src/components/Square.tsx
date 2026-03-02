export const Square = ({children, updateBoard, index, isSelected}: {children?: any, updateBoard?: any | null, index?: number, isSelected?: boolean}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () => {
        updateBoard(index)
    }
    
    return (
        <div key={index} className={className} onClick={handleClick}>
            {children}
        </div>
    )
}