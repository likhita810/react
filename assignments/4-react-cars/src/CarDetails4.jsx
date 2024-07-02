export default function Carsdata4 ({carImage,model,onSelect4}) {
    return (
        <div onClick={onSelect4}>
            <img className="cars" src={carImage} alt={model}/>
            <h2>{model}</h2>
        </div>    
    )
}