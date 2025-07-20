"use client";

import React, { useState, useCallback, memo } from 'react';
import Header from './Header';
import AuthModal from './AuthModal';

const HeaderWrapper: React.FC = memo(() => {
  const [authOpen, setAuthOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const openSignIn = useCallback(() => {
    setAuthMode('signin');
    setAuthOpen(true);
  }, []);

  const openSignUp = useCallback(() => {
    setAuthMode('signup');
    setAuthOpen(true);
  }, []);

  const closeAuth = useCallback(() => setAuthOpen(false), []);

  const switchMode = useCallback(() => 
    setAuthMode(mode => mode === 'signin' ? 'signup' : 'signin'), 
    []
  );

  return (
    <>
      <Header onSignIn={openSignIn} onSignUp={openSignUp} />
      <AuthModal 
        open={authOpen} 
        onClose={closeAuth} 
        mode={authMode} 
        onSwitchMode={switchMode} 
      />
    </>
  );
});

HeaderWrapper.displayName = 'HeaderWrapper';

export default HeaderWrapper; 