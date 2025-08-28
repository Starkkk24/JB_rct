import './App.css'
import './static/css/global.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import First from './pages/First'
import Second from './pages/Second'
import Nav from './components/nav'
import Feed from './pages/Feed'
import LogIn from './pages/login'
import SignUp from './pages/signup'
import Home from './pages/home'
import LogIn1 from './pages/login-1'
import SignUp1 from './pages/signup-1'
import ClubsPage from './pages/Clubs'
import UniversityPg from './pages/UniversityPg'
import MapPg from './pages/MapPg'
import ProfilePg from './pages/ProfilePg'
function App() {

  return (
    <>
      <Router>
        <Routes>
              <Route path="/login" element={<LogIn1 />} />
              <Route path="/l" element={<LogIn />} />
              <Route path="/signup" element={<SignUp1 />} />
              <Route path="/su" element={<SignUp />} />
            <Route path="/" element={<Nav/>} >            
              <Route path="/profilepg" element={<ProfilePg />} />
              <Route path="/map" element={<MapPg/>} />
              <Route path="/university" element={<UniversityPg />} />
              <Route path="/clubs" element={<ClubsPage />} />
              <Route path="/" element={<Home />} />
              <Route path="/feeds" element={<Feed/>} />
              <Route path="/t" element={<First></First>} />
              <Route path="/tt" element={<Second />} />
          </Route>
        </Routes>
      </Router>
    </>
  )

}

export default App
