import rimg from './assets/react.svg';
import dyn from "./assets/dynamic.png";

function Header() {
  return (
    <>
    <h1>Component Properties (cmp-props)</h1>
    <img src={rimg} alt={rimg} title={rimg} />
    </>
  )
}

function Main(props) {
  return (
    <li>
      <img src={props.image} alt={props.alt} title={props.title} width="200px"/>
      <h6>{props.title}</h6>
    </li>
  )
}

function App() {
  return (
    <>
      <Header />

      <section>
        <p>The img within the Main component can be given here to any required image using that component and and it's properties.</p>

        <ul>
          <Main title = "dynamic props img" alt="dynamic props img" image = {dyn} />
          {/* properties/ styles like width/height should be given in Main component. There wont be any effect if mentioned here unless they are props. */}
        </ul>
      </section>
    </>
  )
}
  

export default App;