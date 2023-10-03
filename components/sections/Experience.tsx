'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { MdWork } from 'react-icons/md';
import { experiences } from '../constants/mappingConstants';
import clsx from 'clsx';
import { poppins } from '../constants/designConstants';

const ExperienceSection = () => {
  return (
    <div>
      <h2 className='mb-5 text-2xl md:text-3xl lg:text-4xl'>My Tech Journey</h2>
      <VerticalTimeline
        animate={false}
        layout='1-column-left'
        lineColor='var(--accent)'
      >
        {experiences.map((experience, i) => (
          <VerticalTimelineElement
            key={i}
            contentStyle={{
              background: 'var(--secondary)',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  var(--secondary)',
            }}
            date={experience.duration}
            iconStyle={{ background: 'var(--accent)', color: '#fff' }}
            icon={<MdWork />}
          >
            <h3 className='text-xl'>{experience.position}</h3>
            <h4 className='text-md'>{experience.company}</h4>
            <p className='text-sm'>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceSection;
