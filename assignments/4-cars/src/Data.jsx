export default function Carsdata ({carImage,model,onSelect}) {
    return (
        <div className="cars" onClick={onSelect}>
            <img src={carImage} alt={model} width="80%" height="200px"/>
            <h3>{model}</h3>
        </div>
    )
}