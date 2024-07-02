import { useState } from "react";
import Carsdata from "./Data.jsx";
import { CARS_DATA } from "./data.js";
import { DETAILS } from "./data.js";
import "./App.css";
import Tabbutton from "./Tabbutton.jsx";
import { INFO } from "./data.js";

function App() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedInfo, setselectedInfo] = useState(null);

  // function handleSelect(selectCar) {
  //   setSelectedCar(selectCar);
  // }

  function handleSelect(carModel) {
    setSelectedCar(carModel);
  }

  function handleSelectInfo(selectInfo) {
    setselectedInfo(selectInfo);
  }

  let content = '';
  if (selectedInfo) {
    content = (
      <div>
          <p>{INFO[selectedInfo].data1}</p>
          <p>{INFO[selectedInfo].data2}</p>
          <p>{INFO[selectedInfo].data3}</p>
        </div>
    );
  }
  
  return (
    <>
      <h1>Cars Models</h1>

      <main style={{display:"flex", flexWrap:"wrap"}}>
        {/* <Carsdata {...CARS_DATA[0]}/>
        <Carsdata {...CARS_DATA[1]}/>
        <Carsdata {...CARS_DATA[2]}/>
        <Carsdata {...CARS_DATA[3]} onSelect={() => handleSelect('cyberster')}/>
        <Carsdata {...CARS_DATA[4]} onSelect={() => handleSelect('laren')}/> */}

        {/* {CARS_DATA.map((carModel) => (
              <Carsdata key = {carModel.model} {...carModel} onSelect = {() => handleSelect(carModel.model)}/>
            ))}
         */}
          
          {CARS_DATA.map((car, index) => (
            <Carsdata key={index} {...car} onSelect={() => handleSelect(car.model)}/>
          ))}

        <section className="selectedCar">
          {CARS_DATA.map((car) => (
              selectedCar === car.model ? (<Carsdata {...car} />) : undefined
                ))}
        </section>
      </main>

      <div className="buttons">
        <Tabbutton onSelectInfo = {() => handleSelectInfo("contactDetails")}>Contact Details</Tabbutton>
        <Tabbutton onSelectInfo = {() => handleSelectInfo("downloadBrochure")}>Download Brochure</Tabbutton>
        <Tabbutton onSelectInfo = {() => handleSelectInfo("experienceThrill")}>Experience the Thrill</Tabbutton>
        <Tabbutton onSelectInfo = {() => handleSelectInfo("callBack")}>Request A Call Back</Tabbutton>

      {content}
      </div>


      {/* {selectedCar && (
          <section>
            <h2>{selectedCar.model}</h2>
            <p>Engine Power: {selectedCar.enginePower}</p>
            <p>Fuel Capacity: {selectedCar.fuelCapacity}</p>
            <p>Transmission Type: {selectedCar.transmissionType}</p>
            <p>Compression Ratio: {selectedCar.compressionRatio}</p>
            <p>Number of Cylinders: {selectedCar.cylinder}</p>
            <p>Cost: {selectedCar.cost}</p>
          </section>
        )} */}
    </>
  )
};
export default App;