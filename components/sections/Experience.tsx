'use client';

import React, { useEffect } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { MdWork } from 'react-icons/md';
import { getExperience } from '@/sanity/utils';
import { TExperience } from '@/types';

const ExperienceSection = () => {
  const [experiences, setExperiences] = React.useState<TExperience[]>([]);

  useEffect(() => {
    getExperience().then((data) => setExperiences(data));
  }, []);

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
              borderRight: '7px solid var(--secondary)',
            }}
            date={`${new Date(experience.startDate).toLocaleDateString(
              'default',
              { month: 'long', year: 'numeric' }
            )} - ${
              experience.endDate
                ? new Date(experience.endDate).toLocaleDateString('default', {
                    month: 'long',
                    year: 'numeric',
                  })
                : 'Present'
            }`}
            iconStyle={{ background: 'var(--accent)', color: '#fff' }}
            icon={<MdWork />}
          >
            <h3 className='text-xl'>{experience.role}</h3>
            <h4 className='text-md'>{experience.company}</h4>
            <p className='text-sm'>
              {experience.description.map(({ _key, text }) => (
                <li className="list-none before:content-['✔️'] ml-2" key={_key}>{text.trim()}</li>
              ))}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceSection;
