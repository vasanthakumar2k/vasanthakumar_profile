import { useState } from 'react'
import DeveloperBackground from './components/DeveloperBackground'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import ProfileContent from './components/ProfileContent'
import './App.css'

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <DeveloperBackground />
      <Navbar onMenuClick={() => setIsDrawerOpen(true)} />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <ProfileContent />
    </>
  )
}

export default App
