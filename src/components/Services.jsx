import React from 'react'
import styles from '../style';

const Services = () => {
  return (
    <div className={`my-6 ${styles.flexCenter}`}>
      <div className='text-center max-w-[700px]'>
        <p className={styles.subHeading}>The world</p>
        <h1 className={styles.sectionHeading}>Choose the world you want to explore</h1>
      </div>
    </div>
  );
}

export default Services