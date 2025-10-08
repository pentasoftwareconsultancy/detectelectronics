import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from "@studio-freight/lenis";
import './App.css'

// Common components (kept outside lazy since they are always shown)
import Navbar from './components/public/Navbar'
import Footer from './components/public/Footer'
import HomeHero from './components/public/HomeHero'

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'))
const TelecomTowerPage = lazy(() => import('./pages/TelecomTowerPage'))
const OpticalFiberPage = lazy(() => import('./pages/OpticalFiberPage'))
const CivilConstructionPage = lazy(() => import('./pages/CivilConstructionPage'))
const ElectricalSolutionPage = lazy(() => import('./pages/ElectricalSolutionPage'))
const CompletedProjectPage = lazy(() => import('./pages/CompletedProjectPage'))
const CurrentProjectPage = lazy(() => import('./pages/CurrentProjectPage'))
const ProjectManagementPage = lazy(() => import('./pages/ProjectManagementPage'))
const AboutElectronicsPage = lazy(() => import('./pages/AboutElectronicsPage'))
const MissionAndVisionPage = lazy(() => import('./pages/MissionAndVisionPage'))
const CertificationsPage = lazy(() => import('./pages/CertificationsPage'))
const BoardOfDirectorsPage = lazy(() => import('./pages/BoardOfDirectorsPage'))
const CareerPage = lazy(() => import('./pages/CareerPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // optional smooth scroll
    })
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ← Add this inside Router */}
      <Navbar />
      <HomeHero showLearnMore={location.pathname === '/'} />

      {/* Suspense fallback — shows loader while pages are loading */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen text-lg font-medium">
            Loading...
          </div>
        }
      >
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Infra */}
          <Route path="/infra/telecom-tower" element={<TelecomTowerPage />} />
          <Route path="/infra/optical-fiber" element={<OpticalFiberPage />} />
          <Route path="/infra/civil-construction" element={<CivilConstructionPage />} />
          <Route path="/infra/electrical-solution" element={<ElectricalSolutionPage />} />

          {/* Projects */}
          <Route path="/project/completed" element={<CompletedProjectPage />} />
          <Route path="/project/current" element={<CurrentProjectPage />} />
          <Route path="/project/management" element={<ProjectManagementPage />} />

          {/* Management */}
          <Route path="/management/about-electronics" element={<AboutElectronicsPage />} />
          <Route path="/management/mission-vision" element={<MissionAndVisionPage />} />
          <Route path="/management/certifications" element={<CertificationsPage />} />
          <Route path="/management/board" element={<BoardOfDirectorsPage />} />

          {/* Career, Gallery, Contact */}
          <Route path="/career" element={<CareerPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  )
}

export default App
