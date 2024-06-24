function Header() {
  return (
    <header>
      <h1>Nested Components</h1>
    </header>
  )
}

function Content() {
  return (
    <p>A component related to another. Simply, a component is called inside another component (similar to a html inline element) forming a parent-child relationship.</p>
  )
}

function App() {
  return (
    <>
    <Header/>
    {/* calling a component inside another component */}
    <Content/>

    <p>&copy; All Rights Reserved</p>
    </>
  )
}

export default App;