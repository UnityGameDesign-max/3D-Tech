import React from 'react';
import styles from '../style';
import { vrHands } from '../assets';
import '../hovertree';

const Hero = () => (
    <header>
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
                <p className={`${styles.paragraph} max-w-[600px] mt-5`}>Excellence through quality is not just a motto – it is the foundation on 
                which 3 Degrees Technologies is built upon.
                </p>
                <button className='text-white border-white border-s-white'>Click Here</button>
            </div>
            <div>
                <img alt='vr-hands' className='w-[100%] h-[100%] relative z-[5]' src={vrHands}/>
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient'></div>
            </div>
        </section>
        <canvas id='canvas'></canvas>
    </header>
);

export default Hero;