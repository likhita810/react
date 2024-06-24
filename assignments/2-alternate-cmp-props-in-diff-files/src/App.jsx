import { PRODUCTS } from "./data";
import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";
import "./components/Header.css";
import "./components/Products.css";
// import ptypes from "./assets/ptypes.jpg";

function App(){
  return (
    <>
    <Header/>
    {/* <img src={ptypes} alt="ptypes" title="ptypes" width="650px" height="250px" /> */}

    <main>
      <ul>
        <Products {...PRODUCTS[0]}/>
        <Products {...PRODUCTS[1]}/>
        <Products {...PRODUCTS[2]}/>
        <Products {...PRODUCTS[3]}/>
      </ul>
    </main>
    </>
  )
}

export default App;