import React from 'react';
import './App.css';
import './hovertree';
import styles from './style';
import {
  Navbar,
  Client,
  Footer,
  Hero,
  ScienceCard,
  Services,
  Steps,
  Testimonials,
  World,
  AboutUs
} from './components';

const App = () => {
  return (
    <div className='header bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
        
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Client />
          <Services />
          <Steps />
          <AboutUs />
          <World />
          <Testimonials />
          <ScienceCard />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App