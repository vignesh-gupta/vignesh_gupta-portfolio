import React , { useState , useEffect} from 'react'
import { motion } from 'framer-motion';
import { AppWrap , MotionWrap } from '../../wrapper';
import {client , urlFor} from '../../client';

import './Skills.scss';



const Skills = () => {

  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const expQuery = '*[_type=="experiences"]';
    const skillsQuery = '*[_type=="skills"]';

    client.fetch(expQuery)
    .then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery)
    .then((data) => setSkills(data));

  }, []);

  return (
    <>
      <h2 className='head-text'>Skills & Experiences</h2>

      <div className='app__skills-container '>
        <motion.div className='app__skills-list'>
          {skills?.map((skill)=>(
            <motion.div
              whileInView={{opacity:[0,1]}}
              transition={{duration:0.5}}
              className="app__skills-item app_flex"
              key={skill.name}
            >
              <div className='app__flex' style={{background:skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name}/>
              </div>

              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experiences section */}
        <motion.div className='app__skills-exp'>
          {experiences?.map((experience,i) => (
            <motion.div className='app__skills-exp-item' key={experience.year}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>

              <motion.div className='app__skills-exp-works'>
                {experience.works?.map((work)=>(
                  <>
                    <motion.div
                      whileInView={{opacity:[0,1]}}
                      transition={{duration:0.5}}
                      className="app__skills-exp-work app_flex"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4> 
                      <p className='p-text' style={{fontWeight:300}}>{work.company}</p>
                      <p className='p-text' >{work.desc}</p>
                    </motion.div>
                    {/* <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                      delayHide={1000}
                    >
                      {work.desc}
                    </ReactTooltip> */}
                  </>
          ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills , 'app__skills'),
  'skills',
  'app__whitebg app__flex'
);