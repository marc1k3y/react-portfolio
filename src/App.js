import "./App.css"
import { About } from "./components/about"
import { Header } from "./components/header"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <About />
      </div>
    </div>
  )
}

export default App
