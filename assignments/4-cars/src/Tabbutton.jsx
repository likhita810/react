export default function Tabbutton ({children,onSelectInfo,isSelected}) {
    return (
        <>
            <button className = {isSelected ? "active" : undefined} onClick={onSelectInfo} style={{color: "white"}}>{children}</button>
        </>
    )
}