import { DATA } from "./data";
import TabButton from "./components/TabButton.jsx";
import Data from "./components/Data.jsx";

function App () {
  function handleSelect(selectedData) {
    console.log(`You have selected: ${selectedData.description}`);
    console.log(selectedData);
  }


  return (
    <>
      <main>
        <Data {...DATA[0]} onSelect = {() => handleSelect({...DATA[0]})}/>
        <Data {...DATA[1]} onSelect = {() => handleSelect({...DATA[1]})}/>
        <Data {...DATA[2]} onSelect = {() => handleSelect({...DATA[2]})}/>
        <Data {...DATA[3]} onSelect = {() => handleSelect({...DATA[3]})}/>

        {/* here cmp is used as an inline element*/}
        {/* for using children cmp, the cmp should be used as a block level element */}
        
      </main>

      <section>
        <TabButton>React JS</TabButton>
        <TabButton>Child-props</TabButton>

        {/* children prop here is given in btn tag, so whatever given while calling the func will be in a btn */}

      </section>
    </>
  )
}

export default App;
