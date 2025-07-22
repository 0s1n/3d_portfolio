import { motion as Motion } from 'motion/react';

import SectionWrapper from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import FeedbackCard from './cards/FeedbackCard';

function Feedbacks() {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <Motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </Motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            testimonial={testimonial.testimonial}
            name={testimonial.name}
            designation={testimonial.designation}
            company={testimonial.company}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
}

const FeedbacksSection = SectionWrapper(Feedbacks, '');
export default FeedbacksSection;
