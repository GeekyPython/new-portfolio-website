import workList from './worklist.json';
import { WorkTile } from './worktile';
import './work.css';

export const WorkPage = () => {
  return (
    <div className="work-page" id="work">
      <h1>My Work</h1>
      <div className="work-list-container">
        <div className="work-list">
            {workList.map((work, index) => {
                return <WorkTile key={index} title={work.title} description={work.description} imageUrl={work.imageUrl} jobLink={work.jobLink} />;
            })}
        </div>
    </div>
    </div>
  );
}