import { useState } from "react";
import { CARS_DATA, INFO_DETAILS } from "./data.js";
import { DETAILS } from "./data.js";
import "./App.css";
import Tabbutton from "./Tabbutton.jsx";
import { INFO } from "./data.js";
import Carsdata1 from "./CarDetails1.jsx";
import Carsdata2 from "./CarDetails2.jsx";
import Carsdata3 from "./CarDetails3.jsx";
import Carsdata4 from "./CarDetails4.jsx";

function App() {
  const [selectedData1, setSelectedData1] = useState(null);
  const [selectedData2, setSelectedData2] = useState(null);
  const [selectedData3, setSelectedData3] = useState(null);
  const [selectedData4, setSelectedData4] = useState(null);
  const [selectedData5, setSelectedData5] = useState(null);


  const [selectedInfo, setselectedInfo] = useState(null);

  function handleSelect1(carData1) {
    setSelectedData1(carData1);
  }

  function handleSelect2(carData2) {
    setSelectedData2(carData2);
  }

  function handleSelect3(carData3) {
    setSelectedData3(carData3);
  }

  function handleSelect4(carData4) {
    setSelectedData4(carData4);
  }

  function handleSelectInfo(selectInfo) {
    setselectedInfo(selectInfo);
  }

  let carDetails1 = '';
  if (selectedData1) {
    carDetails1 = (
      <div className="details">
        <p className="right"><strong>Model:</strong> {DETAILS[selectedData1].model}</p>
        <p className="left"><strong>Engine Power:</strong> {DETAILS[selectedData1].enginePower}</p>
        <p className="right"><strong>Fuel Capacity: </strong>{DETAILS[selectedData1].fuelCapacity}</p>
        <p className="left"><strong>Transmission Type: </strong>{DETAILS[selectedData1].transmissionType}</p>
        <p className="right"><strong>Compression Ratio: </strong>{DETAILS[selectedData1].compressionRatio}</p>
        <p className="left"><strong>Number of Cylinders: </strong>{DETAILS[selectedData1].cylinder}</p>
        <p className="right"><strong>Cost: </strong>{DETAILS[selectedData1].cost}</p>
      </div>
    )
  }

  let carDetails2 = '';
  if (selectedData2) {
    carDetails2 = (
      <div className="details">
        <p className="right"><strong>Model:</strong> {DETAILS[selectedData2].model}</p>
        <p className="left"><strong>Engine Power:</strong> {DETAILS[selectedData2].enginePower}</p>
        <p className="right"><strong>Fuel Capacity: </strong>{DETAILS[selectedData2].fuelCapacity}</p>
        <p className="left"><strong>Transmission Type: </strong>{DETAILS[selectedData2].transmissionType}</p>
        <p className="right"><strong>Compression Ratio: </strong>{DETAILS[selectedData2].compressionRatio}</p>
        <p className="left"><strong>Number of Cylinders: </strong>{DETAILS[selectedData2].cylinder}</p>
        <p className="right"><strong>Cost: </strong>{DETAILS[selectedData2].cost}</p>
      </div>
    )
  }

  let carDetails3 = '';
  if (selectedData3) {
    carDetails3 = (
      <div className="details">
        <p className="right"><strong>Model:</strong> {DETAILS[selectedData3].model}</p>
        <p className="left"><strong>Engine Power:</strong> {DETAILS[selectedData3].enginePower}</p>
        <p className="right"><strong>Fuel Capacity: </strong>{DETAILS[selectedData3].fuelCapacity}</p>
        <p className="left"><strong>Transmission Type: </strong>{DETAILS[selectedData3].transmissionType}</p>
        <p className="right"><strong>Compression Ratio: </strong>{DETAILS[selectedData3].compressionRatio}</p>
        <p className="left"><strong>Number of Cylinders: </strong>{DETAILS[selectedData3].cylinder}</p>
        <p className="right"><strong>Cost: </strong>{DETAILS[selectedData3].cost}</p>
      </div>
    )
  }

  let carDetails4 = '';
  if (selectedData4) {
    carDetails4 = (
      <div className="details">
        <p><strong>Model:</strong> {DETAILS[selectedData4].model}</p>
        <p><strong>Engine Power:</strong> {DETAILS[selectedData4].enginePower}</p>
        <p><strong>Fuel Capacity: </strong>{DETAILS[selectedData4].fuelCapacity}</p>
        <p><strong>Transmission Type: </strong>{DETAILS[selectedData4].transmissionType}</p>
        <p><strong>Compression Ratio: </strong>{DETAILS[selectedData4].compressionRatio}</p>
        <p><strong>Number of Cylinders: </strong>{DETAILS[selectedData4].cylinder}</p>
        <p><strong>Cost: </strong>{DETAILS[selectedData4].cost}</p>
      </div>
    )
  }


  let content = '';
  if (selectedInfo) {
    content = (
      <div className="info">
          <p>{INFO[selectedInfo].data1}</p>
          <p>{INFO[selectedInfo].data2}</p>
          <p>{INFO[selectedInfo].data3}</p>
        </div>
    );
  }
  
  return (
    <>
      <h1>World of Sports Cars</h1>

      <main>
        <table>
          <tr>
            <td className="left">{carDetails1}</td>
            <td className="details"><Carsdata1 {...CARS_DATA[0]} onSelect1={() => handleSelect1('laren')}/> </td>
          </tr>

          <tr>
            <td className="details"><Carsdata2 {...CARS_DATA[1]} onSelect2={() => handleSelect2('mcLaren')}/></td>
            <td className="right">{carDetails2}</td>
          </tr>
       
          <tr>
            <td className="left">{carDetails3}</td>
            <td className="details"><Carsdata3 {...CARS_DATA[2]} onSelect3={() => handleSelect3('cyberster')}/></td>
          </tr>

          <tr>
            <td className="details"><Carsdata4 {...CARS_DATA[3]} onSelect4={() => handleSelect4('ferari')}/></td>
            <td className="right">{carDetails4}</td>
          </tr>
        </table>
      </main>
          <br />


      <section className="buttons">
        <Tabbutton {...INFO_DETAILS[0]} onSelectInfo = {() => handleSelectInfo("contactDetails")}>Contact Details</Tabbutton>
        <Tabbutton {...INFO_DETAILS[1]} onSelectInfo = {() => handleSelectInfo("downloadBrochure")}>Download Brochure</Tabbutton>
        <Tabbutton {...INFO_DETAILS[2]} onSelectInfo = {() => handleSelectInfo("experienceThrill")}>Experience the Thrill</Tabbutton>
        <Tabbutton {...INFO_DETAILS[3]} onSelectInfo = {() => handleSelectInfo("callBack")}>Request A Call Back</Tabbutton>
        <br />
      </section>
      <div className="nav">{content}</div>

    </>
  )
};
export default App;