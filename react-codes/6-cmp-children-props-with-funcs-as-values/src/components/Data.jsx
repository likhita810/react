export default function Data({title, description, image,onSelect}) {
    return (
      <div onClick={onSelect} style={{border: "1px solid", display: "inline-block", margin:"10px"}}>
        <img src={image} alt={title} width="150px" height="150px" />
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    )
}