import { technologies } from '../constants';
import SectionWrapper from '../hoc';
import BallCanvas from './canvas/BallCanvas';

function Tech() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} name={technology.name} />
        </div>
      ))}
    </div>
  );
}

const TechSection = SectionWrapper(Tech, '');
export default TechSection;
