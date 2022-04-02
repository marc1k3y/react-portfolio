import "./App.css"
import { Greeting } from "./components/greeting"
import { Robot } from "./components/robot"

function App() {
  return (
    <div className="App">
      <Robot>
        <Greeting />
      </Robot>
    </div>
  )
}

export default App
