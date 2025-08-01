import { BrowserRouter as Router } from 'react-router'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './pages/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  )
}
export default App