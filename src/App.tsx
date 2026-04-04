/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-arctic-bg text-arctic-text font-sans selection:bg-arctic-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Expertise />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
