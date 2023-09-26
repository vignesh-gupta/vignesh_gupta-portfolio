import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

type SkillsCircleProps = {
  name: string;
  icon: string;
  delay: number;
};

const SkillsCircle = ({ name, icon, delay }: SkillsCircleProps) => {
  return (
    <motion.div
      whileInView={{ scale: [0, 1] }}
      transition={{ delay: delay / 10 }}
      className='flex h-20 w-20 items-center justify-center rounded-full bg-foreground p-2'
    >
      <Image
        loading='lazy'
        src={icon}
        alt={name}
        width={50}
        height={50}
        className='rounded-full object-contain'
      />
    </motion.div>
  );
};

export default SkillsCircle;
