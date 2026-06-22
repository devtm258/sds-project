import React from 'react' 



import gsap from 'gsap';
import { ScrollTrigger, SplitText} from "gsap/all"
gsap.registerPlugin(ScrollTrigger, SplitText);

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import About from "./components/About";
import Events from "./components/Events.jsx"


const App = () => {
  return (
    
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Events></Events>
      
      <Footer></Footer>

    </main>

    
  )
}

export default App

