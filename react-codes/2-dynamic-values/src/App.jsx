

// declaring elements in an array as a var

const reactVar = ["React", "Dynamic Values", "React js"];

function getRandomIndex() {
  return Math.floor(Math.random() * (reactVar.length))
  // console.log(Math.floor(Math.random()) * (index + 1));
}

function Header() {
  const sub=reactVar[getRandomIndex()];
  //need a random value from the array, this random value is obtained from the getRandomIndex function to access that particular element from the array
  return (
    <>
      <h1>
        Dynamic Values
      </h1>
      <p>
        This is a concept of <strong>{sub}</strong>.
      </p>
    </>
  )
}

function App() {
  return (
    <>
    <Header/>

    <main>
      <p>Dynamic values can be a js var, prop or a state var.</p>
    </main>
    </>
  )
}
export default App;