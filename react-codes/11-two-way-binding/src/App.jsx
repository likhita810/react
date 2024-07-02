import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  
  function handleChange (inputIdentifier, newValue) {
    setUserInput((previousUSerInput) => {
        return {
            ...previousUSerInput, [inputIdentifier]: newValue
            // prevUserInput is a parameter for the setUserInput method to access each value in it
            // we use [] to make it dynmaic along with the inputIdentifier to update the identifiers selected
        }; 
    });
}

  return (
    <>
    <Header/>
    <UserInput userInput = {userInput} onChange = {handleChange}/>
    <Results input = {userInput}/>
    </>
  )
}

export default App;