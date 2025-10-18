import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// استخدام Lazy Loading للمكونات
const HomePage = lazy(() => import('./components/pages/HomePage'));
const ServicesPage = lazy(() => import('./components/pages/ServicesPage'));
const ArbitrationPage = lazy(() => import('./components/pages/ArbitrationPage'));
const ConsultationsPage = lazy(() => import('./components/pages/ConsultationsPage'));
const ArticlesPage = lazy(() => import('./components/pages/ArticlesPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="bg-white text-brand-blue">
          <Header />
          <main>
            <Suspense fallback={<div className="text-center py-10">جارٍ التحميل...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/arbitration" element={<ArbitrationPage />} />
                <Route path="/consultations" element={<ConsultationsPage />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>
          <FloatingWhatsApp />
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  )
}

export default App