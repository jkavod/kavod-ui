import React from 'react';
import { Header, Nav } from '../UI'
import { About, Contact, Hero, Services, Work } from '../Components'


export default function Home() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Hero />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

