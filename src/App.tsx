import './App.css'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Certificates from './components/Certificates' 
import Contact from './components/Contact'

export default function App() {
  return (
    <main className="bg-red-200">
      <Profile/>
      <Projects/>
      <Certificates/>
      <Contact/>
    </main>
  )
}