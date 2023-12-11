import './App.css';
import { Header, Nav } from './UI'
import { About, Contact, Hero, Services, Work } from './Components'


function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Hero />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}

export default App;
