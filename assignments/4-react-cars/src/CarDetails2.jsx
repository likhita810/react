export default function Carsdata2 ({carImage,model,onSelect2}) {
    return (
        <div onClick={onSelect2}>
            <img className="cars" src={carImage} alt={model}/>
            <h2>{model}</h2>
        </div>    
    )
}