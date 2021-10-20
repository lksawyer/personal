import Card from '../UI/Card';
import classes from './SidebarRoadmap.module.css';

const SidebarRoadmap = (params) => {
  return (
    <Card classes={classes.roadmap}>
      <div className={classes.roadmap__header}>
        <h2>Roadmap</h2>
        <button>View</button>
      </div>
      <div className={classes.roadmap__content}>
        <ol className={classes.roadmap__list}>
          <li className={classes['roadmap__list-item']}>
            <div>
              Planned<span>2</span>
            </div>
          </li>
          <li className={classes['roadmap__list-item']}>
            <div>
              In-Progress<span>3</span>
            </div>
          </li>
          <li className={classes['roadmap__list-item']}>
            <div>
              Live<span>1</span>
            </div>
          </li>
        </ol>
      </div>
    </Card>
  );
};

export default SidebarRoadmap;
