import { motion as Motion } from 'motion/react';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';
import { ProjectCard } from './cards';
import SectionWrapper from '../hoc';

function Works() {
  return (
    <>
      <Motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </Motion.div>

      <div className="w-full flex">
        <Motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following proyects showcases my skills and experience through
          real-world examples of my work. Each proyect is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage proyects effectively.
        </Motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            image={project.image}
            sourceCodeLink={project.source_code_link}
          />
        ))}
      </div>
    </>
  );
}

const WorksSection = SectionWrapper(Works, '');
export default WorksSection;
