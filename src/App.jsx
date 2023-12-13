import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Experience from './pages/Experience'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ProjectDisplay from './pages/ProjectDisplay.jsx'


function App() {
  return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/project/:id' element={<ProjectDisplay />} /> 
				</Routes>
				<Footer />
			</Router>
		</div>
  )
}

export default App
