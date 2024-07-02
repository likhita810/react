import { useState } from "react";

import { DATA } from "./data";
import { VALUE_DATA } from "./data";

import TabButton from "./components/TabButton.jsx";
import Data from "./components/Data.jsx";

function App () {
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState('');

  function handleSelectItem(selected) {
    setSelectedItem(selected);
  }


  function handleSelect(selectedData) {
    setSelectedProduct(selectedData);
  }

  // rendering content conditionally
  let content = '';

  if (selectedProduct) {
    content = (
      <div style={{border: "1px solid", borderRadius: "5px", margin: "10px", width: "200px"}}>
          
          <h3>{VALUE_DATA[selectedProduct].product}</h3>
          <p>{VALUE_DATA[selectedProduct].cost}</p>
          <p>{VALUE_DATA[selectedProduct].brand}</p>
        </div>
    );
  } 
  // else {
  //   content = <p>please select a product button</p>;
  // }


  return (
    <body>
      <main>
        <Data {...DATA[0]} onSelectItem = {() => handleSelectItem(0)}/>
        <Data {...DATA[1]} onSelectItem = {() => handleSelectItem(1)}/>
        <Data {...DATA[2]} onSelectItem = {() => handleSelectItem(2)}/>
        <Data {...DATA[3]} onSelectItem = {() => handleSelectItem(3)}/>
      </main>

      {/* deriving computing values */}
      <div style={{border: "1px solid", borderRadius: "5px", margin: "10px", width:"200px"}}>
          
          {/* <h3>{DATA[selectedItem].image}</h3> */}
          <img src={DATA[selectedItem].image} width="150px" height="150px" />
          <p>{DATA[selectedItem].item}</p>
          <p>{DATA[selectedItem].price}</p>
        </div>

        {/* {selectedItem} */}

      <section>
        <TabButton onSelect= {() => handleSelect("product1")}>product1</TabButton>
        <TabButton onSelect= {() => handleSelect("product2")}>product2</TabButton>
        <TabButton onSelect= {() => handleSelect("product3")}>product3</TabButton>
        <TabButton onSelect= {() => handleSelect("product4")}>product4</TabButton>
      
        {content}
      </section>
    </body>
  )
}

export default App;
