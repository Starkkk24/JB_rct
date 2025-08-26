import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import First from './pages/First'
import Second from './pages/Second'
import Nav from './components/nav'
import Feed from './pages/Feed'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Nav/>} >            
            <Route path="/" element={<Feed/>} />
            <Route path="/f" element={<First></First>} />
            <Route path="/s" element={<Second />} />
          </Route>
        </Routes>
      </Router>
    </>
  )

}

export default App
