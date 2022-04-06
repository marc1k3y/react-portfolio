import "./App.css"
// import { Greeting } from "./components/greeting"
import { Header } from "./components/header"
import { Main } from "./components/main"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        {/* <Greeting /> */}
        <Main />
      </div>
    </div>
  )
}

export default App
