import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { Services } from './Services';
import { Pricing } from './Pricing';
import { Community } from './Community';
import { Contact } from './Contact';

export const Landing: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Community />
      <Contact />
    </>
  );
};