import { technologies } from '../constants';
import SectionWrapper from '../hoc';
import { BallCanvas } from './canvas';


function Tech() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 bg-tertiary rounded-lg border-2 border-secondary flex justify-center items-center" key={technology.name}>
          <BallCanvas icon={technology.icon} name={technology.name} />
        </div>
      ))}
    </div>
  );
}

const TechSection = SectionWrapper(Tech, '');
export default TechSection;
