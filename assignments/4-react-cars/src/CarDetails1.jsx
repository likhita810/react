export default function Carsdata1 ({carImage,model,onSelect1}) {
    return (
        <div onClick={onSelect1}>
            <img className="cars" src={carImage} alt={model}/>
            <h2>{model}</h2>
        </div>    
    )
}



