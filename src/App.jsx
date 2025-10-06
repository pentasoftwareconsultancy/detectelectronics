import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Common components
import Navbar from './components/public/Navbar'
import Footer from './components/public/Footer'

// Pages
import HomePage from './pages/HomePage'
import TelecomTowerPage from './pages/TelecomTowerPage'
import OpticalFiberPage from './pages/OpticalFiberPage'
import CivilConstructionPage from './pages/CivilConstructionPage'
import ElectricalSolutionPage from './pages/ElectricalSolutionPage'
import CompletedProjectPage from './pages/CompletedProjectPage'
import CurrentProjectPage from './pages/CurrentProjectPage'
import ProjectManagementPage from './pages/ProjectManagementPage'
import AboutElectronicsPage from './pages/AboutElectronicsPage'
import MissionAndVisionPage from './pages/MissionAndVisionPage'
import CertificationsPage from './pages/CertificationsPage'
import BoardOfDirectorsPage from './pages/BoardOfDirectorsPage'
import CareerPage from './pages/CareerPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <Navbar /> {/* Common on all pages */}

      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Infra */}
        <Route path="/telecom-tower" element={<TelecomTowerPage />} />
        <Route path="/optical-fiber" element={<OpticalFiberPage />} />
        <Route path="/civil-construction" element={<CivilConstructionPage />} />
        <Route path="/electrical-solution" element={<ElectricalSolutionPage />} />

        {/* Projects */}
        <Route path="/completed-projects" element={<CompletedProjectPage />} />
        <Route path="/current-projects" element={<CurrentProjectPage />} />
        <Route path="/project-management" element={<ProjectManagementPage />} />

        {/* Management */}
        <Route path="/about-electronics" element={<AboutElectronicsPage />} />
        <Route path="/mission-vision" element={<MissionAndVisionPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/board-of-directors" element={<BoardOfDirectorsPage />} />

        {/* Career, Gallery, Contact */}
        <Route path="/career" element={<CareerPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer /> {/* Common on all pages */}
    </Router>
  )
}

export default App
