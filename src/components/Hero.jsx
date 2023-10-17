import React from 'react';
import styles from '../style';

const Hero = () => (
    <section id='home' className={
        `flex md:flex-row flex-col ${styles.paddingY}`}
    >
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className='flex flex-row items-start py-[6px] px-[4px]'></div>
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-ibmPlexMono font-semibold ss:text-[72px] text-[52px] text-gradient'>
                3D Technology<br className='sm:block 
                 hidden'/> {" "}
                <span
                 className='text-white'> world
                 </span>{" "}
                 <span className='text-white'>of possibilities.</span>
                </h1>
            </div>
        </div>
    
    </section>
)

export default Hero