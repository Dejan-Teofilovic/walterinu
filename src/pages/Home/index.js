import React from 'react';
import CoinMarketCapSection from './CoinMarketCapSection';
import HeroSection from './HeroSection';
import JoinTheInvasionSection from './JoinTheInvasionSection';
import UtilitySection from './UtilitySection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoinMarketCapSection />
      <UtilitySection />
      <JoinTheInvasionSection />
    </>
  );
}