"use client";
import React, { useState } from 'react';
import Hero from '../components/Hero';
import ToolsGrid from '../components/ToolsGrid';
import SolutionsSection from '../components/SolutionsSection';
import TrustedBySection from '../components/TrustedBySection';
import PremiumSection from '../components/PremiumSection';
import AuthModal from '../components/AuthModal';

export default function HomePage() {
  const [authOpen, setAuthOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const closeAuth = () => setAuthOpen(false);

  const switchMode = () => setAuthMode(mode => mode === 'signin' ? 'signup' : 'signin');

  return (
    <div className="min-h-screen bg-[url('/background.svg')] bg-fixed bg-cover bg-center flex flex-col font-sans">
      <main>
        <Hero />
        <ToolsGrid />
        <SolutionsSection />
        <TrustedBySection />
        <PremiumSection />
      </main>
      <AuthModal 
        open={authOpen} 
        onClose={closeAuth} 
        mode={authMode} 
        onSwitchMode={switchMode} 
      />
    </div>
  );
} 