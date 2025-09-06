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
      > I am a driven individual pursuing a major in Electrical & Computer Engineering with a minor in Artificial Intelligence.
      My passion lies in software development, where I strive to design and build reliable, efficient software systems that make a tangible difference in people's lives. 
      With a strong foundation in engineering principles and a keen interest in emerging technologies, I am committed to continuous learning and innovation in the field.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")