import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Highlights from './components/Highlights';
import Model from './components/Model';
import * as Sentry from '@sentry/react';
import Features from './components/Features';
import HowitWorks from './components/HowitWorks';
import Footer from './components/Footer';
function App() {
 
  return (
    <main  className="bg-black">
     <Navbar />
     <Hero />
     <Highlights />
     <Model />
     <Features />
     <HowitWorks />
    <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
