import Navbar4akc from './framer/navbar-4akc'
import './framer/styles.css'

const Navbar4akcResponsive = (Navbar4akc as any).Responsive ?? Navbar4akc

function App() {
  return (
    <div className="min-h-screen">
      <Navbar4akcResponsive />
    </div>
  )
}

export default App
