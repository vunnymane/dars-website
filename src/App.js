import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import DarsLogo from './DarsLogoTr.png';
import './App.css';
import Home from './Home';
import PastProjects from './PastProjects';
import FutureGoals from './FutureGoals';
import DonateForm from './DonateForm';
import ContactForm from './ContactForm';

const SidebarSocials = () => (
  <div className="Sidebar-socials">
    <a href="https://www.youtube.com/@DarsInitiative" target="_blank" rel="noopener noreferrer" title="YouTube" className="Sidebar-social-icon">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#FFD76A"/>
        <path d="M35.5 20.5C35.5 19.1 34.4 18 33 18H15C13.6 18 12.5 19.1 12.5 20.5V27.5C12.5 28.9 13.6 30 15 30H33C34.4 30 35.5 28.9 35.5 27.5V20.5ZM21 27V21L27 24L21 27Z" fill="#181818"/>
      </svg>
    </a>
    <a href="https://www.instagram.com/darsinitiative/" target="_blank" rel="noopener noreferrer" title="Instagram" className="Sidebar-social-icon">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#FFD76A"/>
        <path d="M24 17.2c2.6 0 2.9 0 3.9.1 1 .1 1.5.2 1.8.4.4.2.7.4 1 .7.3.3.5.6.7 1 .2.3.3.8.4 1.8.1 1 .1 1.3.1 3.9s0 2.9-.1 3.9c-.1 1-.2 1.5-.4 1.8-.2.4-.4.7-.7 1-.3.3-.6.5-1 .7-.3.2-.8.3-1.8.4-1 .1-1.3.1-3.9.1s-2.9 0-3.9-.1c-1-.1-1.5-.2-1.8-.4-.4-.2-.7-.4-1-.7-.3-.3-.5-.6-.7-1-.2-.3-.3-.8-.4-1.8-.1-1-.1-1.3-.1-3.9s0-2.9.1-3.9c.1-1 .2-1.5.4-1.8.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.3-.2.8-.3 1.8-.4 1-.1 1.3-.1 3.9-.1zm0-1.7c-2.7 0-3 .1-4 .1-1 .1-1.7.2-2.3.5-.6.2-1.1.5-1.6 1-.5.5-.8 1-1 1.6-.3.6-.4 1.3-.5 2.3-.1 1-.1 1.3-.1 4s0 3 .1 4c.1 1 .2 1.7.5 2.3.2.6.5 1.1 1 1.6.5.5 1 .8 1.6 1 .6.3 1.3.4 2.3.5 1 .1 1.3.1 4 .1s3 0 4-.1c1-.1 1.7-.2 2.3-.5.6-.2 1.1-.5 1.6-1 .5-.5.8-1 1-1.6.3-.6.4-1.3.5-2.3.1-1 .1-1.3.1-4s0-3-.1-4c-.1-1-.2-1.7-.5-2.3-.2-.6-.5-1.1-1-1.6-.5-.5-1-.8-1.6-1-.6-.3-1.3-.4-2.3-.5-1-.1-1.3-.1-4-.1zm0 3.7a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm6.4-8.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" fill="#181818"/>
      </svg>
    </a>
  </div>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <Router>
      <div className="App app-bg">
        <div className="App-topbar">
          <div className="Topbar-branding">
            <button 
              className={`Hamburger ${mobileMenuOpen ? 'open' : ''}`} 
              onClick={() => setMobileMenuOpen(m => !m)} 
              aria-label="Menu"
            >
              <span className="Hamburger-bar" />
              <span className="Hamburger-bar" />
              <span className="Hamburger-bar" />
            </button>
            <img src={DarsLogo} className="Sidebar-logo" alt="Dars Initiative Logo" />
          </div>
          {/* Desktop horizontal nav */}
          <nav className="Topbar-nav">
            <div className="Topbar-nav-links">
              <NavLink to="/" end className={({ isActive }) => "Sidebar-link" + (isActive ? " active" : "")}>Home</NavLink>
              <NavLink to="/past-projects" className={({ isActive }) => "Sidebar-link" + (isActive ? " active" : "")}>Past Projects</NavLink>
              <NavLink to="/future-goals" className={({ isActive }) => "Sidebar-link" + (isActive ? " active" : "")}>Future Goals</NavLink>
              <NavLink to="/donate" className={({ isActive }) => "Sidebar-link Sidebar-donate" + (isActive ? " active" : "")}>Donate</NavLink>
              <NavLink to="/contact" className={({ isActive }) => "Sidebar-link" + (isActive ? " active" : "")}>Contact Us</NavLink>
            </div>
          </nav>
          {mobileMenuOpen && (
            <div className="Mobile-menu-overlay">
              <nav className="Mobile-nav">
                <NavLink to="/" end className={({ isActive }) => "Mobile-link" + (isActive ? " active" : "") } onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
                <NavLink to="/past-projects" className={({ isActive }) => "Mobile-link" + (isActive ? " active" : "") } onClick={() => setMobileMenuOpen(false)}>Past Projects</NavLink>
                <NavLink to="/future-goals" className={({ isActive }) => "Mobile-link" + (isActive ? " active" : "") } onClick={() => setMobileMenuOpen(false)}>Future Goals</NavLink>
                <NavLink to="/donate" className={({ isActive }) => "Mobile-link Mobile-donate" + (isActive ? " active" : "") } onClick={() => setMobileMenuOpen(false)}>Donate</NavLink>
                <NavLink to="/contact" className={({ isActive }) => "Mobile-link" + (isActive ? " active" : "") } onClick={() => setMobileMenuOpen(false)}>Contact Us</NavLink>
              </nav>
            </div>
          )}
        </div>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/past-projects" element={<PastProjects />} />
            <Route path="/future-goals" element={<FutureGoals />} />
            <Route path="/donate" element={<DonateForm />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>&copy; {new Date().getFullYear()} Dars Initiative. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
