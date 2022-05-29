import React from 'react';
import CoinMarketCapSection from './CoinMarketCapSection';
import HeroSection from './HeroSection';
import JoinTheInvasionSection from './JoinTheInvasionSection';
import UtilitySection from './UtilitySection';
// import MetaverseSection from './MetaverseSection';
import RoadmapSection from './RoadmapSection';
import TokenomicsSection from './TokenomicsSection';
import TeamSection from './TeamSection';
import Footer from '../../components/Footer';
import OurPartnersSection from './OurPartnersSection';
import ScrollFab from '../../components/ScrollFab';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoinMarketCapSection />
      <UtilitySection />
      <JoinTheInvasionSection />
      {/* <MetaverseSection /> */}
      <RoadmapSection />
      <TokenomicsSection />
      <TeamSection />
      <OurPartnersSection />
      <Footer />
      <ScrollFab />
    </>
  );
}