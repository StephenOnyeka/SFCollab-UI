import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import MissionSection from '@/components/about/MissionSection';
import ValuesSection from '@/components/about/ValuesSection';
import GuidingPrinciples from '@/components/about/GuidingPrinciples';
import AIToolsAndSecurity from '@/components/about/AIToolsAndSecurity';
import AboutCTA from '@/components/about/AboutCTA';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <MissionSection />
      <GuidingPrinciples />
      <ValuesSection />
      <AIToolsAndSecurity />
      <AboutCTA />
    </div>
  );
}