import { ALT_CMP_PROPS } from "./data";

function Header() {
    return(
        <>
        <h2>Alternate component properties</h2>
        <p>It is accessing the set of properties stored in an object data </p>
        </>
    )
}

// each property has to called seperately using these cmp props. this component has to be called every time u need a different data.

// function Altcmpprops(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

function Altcmpprops({title, description, image}) {
    return (
      <li>
        <img src={image} alt={title} width="150px" height="150px" />
        <h4>{title}</h4>
        <p>{description}</p>
      </li>
    )
}

// so, instead, alternate comp props can be used to access a set of properties for different data stored as object data.

function App(){
    return(
        <>
        <Header/>

        <Altcmpprops 
        image = {ALT_CMP_PROPS[0].image}
        title = {ALT_CMP_PROPS[0].title}
        description = {ALT_CMP_PROPS[0].description}
        />

        <Altcmpprops {...ALT_CMP_PROPS[1]}/>
        <Altcmpprops {...ALT_CMP_PROPS[2]}/>
        <Altcmpprops {...ALT_CMP_PROPS[3]}/>

        </>
    )
}

export default App;