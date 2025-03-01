import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion as Motion } from 'motion/react';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';
import SectionWrapper from '../hoc';
import ExperienceCard from './cards/ExperienceCard';

function Experience() {
  return (
    <>
      <Motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </Motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

const ExperienceSection = SectionWrapper(Experience, 'work');
export default ExperienceSection;
