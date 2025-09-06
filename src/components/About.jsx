import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] 
      max-w-3xl leading-[30px]"
      > I am a Computer Engineering student with a minor in Artificial Intelligence, currently working as a Junior Systems Developer at MPAC. 
      I’m passionate about building reliable, efficient software and enjoy working at the intersection of data, infrastructure, and automation. With one year left in my degree, I’m eager to keep growing my skills while contributing to impactful, real-world projects
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")