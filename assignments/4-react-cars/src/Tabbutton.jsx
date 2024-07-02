export default function Tabbutton ({children,onSelectInfo,infoImage,info}) {
    return (
            <div onClick={onSelectInfo}>
                <img src={infoImage} alt={info} width="70px" height="50px"/>
                <h3>{children}</h3>
            </div>
    )
}