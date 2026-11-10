import { BrowserRouter, Link, Navigate, Route, Routes, useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SuccessPage from './pages/SuccessPage';
import { getProperty } from './data/properties';
import ScrollRevealController from './components/ScrollRevealController';
import SiteNav from './components/SiteNav';

function RoutedPropertyDetails() {
  const { id } = useParams();
  const property = getProperty(id);
  if (!property) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F5F3EF] p-6 text-center text-[#172A35]">
        <div><h1 className="mb-3 font-manrope text-2xl font-bold">Property not found</h1><p className="mb-6 text-[#777F83]">No details are available for this property yet.</p><Link to="/" className="rounded-lg bg-[#172A35] px-5 py-3 text-sm text-white">Return Home</Link></div>
      </main>
    );
  }
  return <PropertyDetailsPage property={property} />;
}

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
    else if (window.scrollY) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <ScrollRevealController />
      <SiteNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/property/:id" element={<RoutedPropertyDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
