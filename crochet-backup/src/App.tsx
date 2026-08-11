import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen'
import HomePage from './pages/HomePage'
import StoryPage from './pages/StoryPage'

function App() {
  return (
    <BrowserRouter>
      {/* 1-second portal screen on every reload */}
      <WelcomeScreen />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
