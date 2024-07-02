export default function TabButton ({children,onSelect}) {
    return(
        <>
        <li>
            <button onClick={onSelect} style={{background:"linear-gradient(to right,yellow,orange)", margin:"10px"}}>{children ? children : 'Back'}</button>
        </li>
        </>
    )
}
