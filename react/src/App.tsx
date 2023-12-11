import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Navbar = () => <h1> NavBar </h1> 
const RouterView = () => <h1> RouterView </h1>
function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>

      <div className="container">
        <progress className="progress is-small is-primary" max="100" v-if="session.loading">15%</progress>  
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<RouterView />} />
          <Route path="/products" element={<RouterView />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
