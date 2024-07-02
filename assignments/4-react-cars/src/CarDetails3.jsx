export default function Carsdata3 ({carImage,model,onSelect3}) {
    return (
        <div onClick={onSelect3}>
            <img className="cars" src={carImage} alt={model}/>
            <h2>{model}</h2>
        </div>    
    )
}