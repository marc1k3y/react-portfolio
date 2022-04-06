import "./App.css"
import { Header } from "./components/header"
import { Main } from "./components/main"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Main />
      </div>
    </div>
  )
}

export default App
