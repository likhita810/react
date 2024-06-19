import rimg from './assets/react.svg';
import dyn from "./assets/dynamic.png";

function Header() {
  return (
    <>
    <h1>HTML Formatting Dynamic Images</h1>
    </>
  )
}

const imgs = [rimg,dyn];

function getRandomIndex(index) {
  return Math.floor(Math.random() * (index+1));
}

function Content() {
  const imgVar = imgs[getRandomIndex(1)];
  return (
    <p>
      <img src={imgVar} alt={imgVar} title="image" width="200px" />
    </p>
  )
}

function App() {
  return (
    <>
    <Header/>
    <Content/>
    <p>Image in this page is obtained on a random basis</p>
    </>
  )
}

export default App;