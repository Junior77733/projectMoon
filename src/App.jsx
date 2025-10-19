import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Servants from './components/Servants/Servants'
import Battle from './components/Battle/Battle'
import Other from './components/Other/Other'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servants" element={<Servants />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/other" element={<Other />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
