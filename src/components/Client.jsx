import React from 'react'
import styles from '../style'
import { imageClients } from '../constants'
import { motion, useAnimate } from 'framer-motion';
import { useInView } from 'framer-motion';

const Clients = () => {

  return (
    <div className={`flex justify-evenly ${styles.flexCenter}`}>
      {imageClients.map((image) => (
        <motion.img 
         className={styles.imgFit} 
         src={image.imageSrc} 
         alt={image.alt}
         initial={{ opacity: 0, x: -100 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1 }}
        />
      ))}
    </div>
  )
}

export default Clients