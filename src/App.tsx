import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// COMPONENTES
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer/Footer'

// PAGES
import Planos from './components/planos e preços/Planos'

function App() {
  
  return (
      <BrowserRouter>
          <Nav />
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/planos" element={<Planos/>}/>
          </Routes>
          <Footer />
      </BrowserRouter>
  )
}

export default App
