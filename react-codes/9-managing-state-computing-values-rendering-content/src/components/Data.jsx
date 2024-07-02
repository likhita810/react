export default function Data({image, item, price,onSelectItem}) {
    return (
      <div onClick={onSelectItem} style={{border: "1px solid", display: "inline-block", margin:"10px"}}>
        <img src={image} alt={item} width="150px" height="150px" />
        <h3>{item}</h3>
        <p>{price}</p>
      </div>
    )
}