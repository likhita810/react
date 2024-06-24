import react from "./assets/react.svg";
import react2 from "./assets/react2.avif";
import react3 from "./assets/react3.png";
import prop1 from "./assets/prop1.png";
import prop2 from "./assets/prop2.webp";
import prop3 from "./assets/prop3.png";
import prop4 from "./assets/prop4.png";
import prop5 from "./assets/prop5.png";

const reactImgs = [react,react2,react3];
const propImgs = [prop1,prop2,prop3,prop4,prop5];

function getRandomReactImg() {
  return Math.floor(Math.random()*(reactImgs.length));
}

function getRandomPropImg(index) {
  return Math.floor(Math.random()*(index+1))
}

function Header () {
  const reactImg=reactImgs[getRandomReactImg()];
  return (
    <>
    <h1>Essesntial Concepts of React js</h1>
    <img src={reactImg} alt="reactImg" title="reactImg" width="200px" height="200px" border="2px"/>
    {/* this img is not related to the Main components prop concept. this is dynamic image formatting */}
    </>
  )
}

function Nav() {
  return (
    <>
    <ul>
      <li><a href="#">dynamic values</a></li>
      <li><a href="#">dynamic image formatting</a></li>
      <li><a href="#">cmp props</a></li>
    </ul>
    </>
  )
}

function Main(props) {
  const propImg = propImgs[getRandomPropImg(4)];
  return (
    <>
    <img src={propImg} alt={propImg} title={propImg} width="200px" height="200px" border="2px" />
    {/* Though this image is inside main, since props concept is not used, it cant be reused later elsewhere. */}
    <p></p>
    <img src={props.image} alt={props.description} title={props.title} width="200px" height="200px" border="2px"/>
    {/* from this, the img in other components can be changed or new images can be given using this component and its properties. */}
    <p>The term props in abbreviation refers to the properties of an object within a component</p>
    <p>It enables the component to access customized data, values and any kind of information it holds.</p>
    </>
  )
}

function Footer() {
  return (
    <>
    <Main image={prop4} title="prop4" description="this is a concept of component properties" alt="prop4"/>
    </>
  )
}

function App() {
  return (
    <>
    <Header/>
    <p>This page contains the essentail concepts of react js</p>
    <p>It involves nested components, dynamic values and dynamic images and also component properties.</p>

    <Nav/>

    {/* <Main/> */}
    {/* since we are calling Main in Footer component, its not necessary to call it again here. if called, it will run 2 different times. */}
    <Footer/>

    <p>&copy; All Copy Rights Reserved</p>
    </>
  )
}

export default App;