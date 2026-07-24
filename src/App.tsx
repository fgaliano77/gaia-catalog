import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CartDrawer from './components/CartDrawer/CartDrawer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CartDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
