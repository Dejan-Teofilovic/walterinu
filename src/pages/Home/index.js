import React from 'react';
import CoinMarketCapSection from './CoinMarketCapSection';
import HeroSection from './HeroSection';
import JoinTheInvasionSection from './JoinTheInvasionSection';
import UtilitySection from './UtilitySection';
import MetaverseSection from './MetaverseSection';
import RoadmapSection from './RoadmapSection';
import TokenomicsSection from './TokenomicsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoinMarketCapSection />
      <UtilitySection />
      <JoinTheInvasionSection />
      <MetaverseSection />
      <RoadmapSection />
      <TokenomicsSection />
    </>
  );
}