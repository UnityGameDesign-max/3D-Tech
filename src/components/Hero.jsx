import React, { useEffect, useRef } from 'react';
import styles from '../style';
import { vrHands } from '../assets';
import createGlobe from 'cobe';

const Hero = () => {
    const canvasRef = useRef();

    useEffect(() => {
        let width = 0;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()
        const globe = createGlobe(canvasRef.current, {
          devicePixelRatio: 2,
          width: width * 2,
          height: width * 2 * 0.1,
          phi: 0,
          theta: 0.3,
          dark: 1,
          diffuse: 3,
          mapSamples: 16000,
          mapBrightness: 1.2,
          baseColor: [1, 1, 1],
          markerColor: [251 / 255, 100 / 255, 21 / 255],
          glowColor: [1.2, 1.2, 1.2],
          markers: [],
          scale: 2.5,
          offset: [0, width * 2 * 0.4 * 0.6],
          onRender: (state) => {
            state.width = width * 2
            state.height = width * 2 * 0.4
          }
        })
        setTimeout(() => canvasRef.current.style.opacity = '1')
        return () => {
            globe.destroy();
        };
    }, []);
    
    return(
        <section id='home' className={
            `flex md:flex-row flex-col sm:py-10 py-6`}
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
                which 3D Technologies is built upon.
                </p>
                <div>
                    <button className='my-7 relative text-white border border-solid py-1 px-3 rounded-lg border-white border-s-white'>Click Here</button>
                    <div className='absolute z-[0] w-[20%] h-[25%] bottom-0 left-0 blue__gradient'></div>  
                </div>
            </div> 
            <div className='w-[100%]'>
                <canvas ref={canvasRef} className='w-[100%] h-[100%] max-w-[100%] aspect-1 relative z-[5]' />
               
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 right-0 blue__gradient'></div>
            </div>
        </section>
    )
}

export default Hero;