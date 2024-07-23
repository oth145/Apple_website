import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Highlights from './components/Highlights';
import Model from './components/Model';
import * as Sentry from '@sentry/react';
import Features from './components/Features';
import HowitWorks from './components/HowitWorks';
import Footer from './components/Footer';
// import { SpeedInsights } from '@vercel/speed-insights/next';
import { SpeedInsights } from '@vercel/speed-insights/react';
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
    <SpeedInsights />

    </main>
  )
}

export default Sentry.withProfiler(App);
