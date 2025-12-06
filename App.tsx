import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Landing } from './components/Landing';
import { PlanDetail } from './components/PlanDetail';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-titan-gold selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/plan/:planId" element={<PlanDetail />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;