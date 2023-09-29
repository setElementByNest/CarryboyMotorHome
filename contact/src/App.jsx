import './App.css'
import Nav from './components/Nav'
import Sendbox from './components/Sendbox'
import Info from './components/info'

function App() {
  return (
    <>
      <Nav />
      <section>
        <Info />
        <Sendbox />
      </section>
    </>
  )
}

export default App
