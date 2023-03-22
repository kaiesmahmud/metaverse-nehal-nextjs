'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn} from '../utils/motion';
import {  TitleText, TypingText } from '@/components';

const World = () => (
  <section
    className={`${styles.paddings} relative z-10`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col gap-8`}
    >
      <TypingText title="| People on the World " textStyles="text-center" />
      <TitleText title="Tract Friends around you and invite them t play together in the same world" textStyles="text-center" />
    </motion.div>
    <motion.div
      variants={fadeIn('up', 'tween', 0.3, 1)}
      className="relative mt-[68px] flex w-full h-[550px]"
    >
      <img
        src="/map.png"
        alt="map"
        className="w-full h-full object-contain"
      />
      {/* First img  */}
      <div className="absolute bottom-[40%] right-[10%] md:bottom-[20%] md:right-[20%] w-[20px]  lg:w-[40px] h-[20px] lg:h-[40px] rounded-full bg-[#5d6680]">
        <img src="people-01.png" alt="people" className=" w-full h-full" />
      </div>
      {/* Second img  */}
      <div className="absolute top-[35%] left-[15%] md:top-[25%] md:left-[15%]  w-[20px]  lg:w-[40px] h-[20px] lg:h-[40px] rounded-full bg-[#5d6680]">
        <img src="people-02.png" alt="people" className=" w-full h-full" />
      </div>
      {/* third Img  */}
      <div className="absolute top-[50%] left-[45%] md:top-[35%] md:left-[45%] w-[20px]  lg:w-[40px] h-[20px] lg:h-[40px] rounded-full bg-[#5d6680]">
        <img src="people-03.png" alt="people" className=" w-full h-full" />
      </div>
    </motion.div>
  </section>
);

export default World;
