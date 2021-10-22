import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './SidebarRoadmap.module.css';

const SidebarRoadmap = (params) => {
  // Use redux to pull out list of roadmap items
  const roadmapItemArray = useSelector((state) => {
    // Returns array of productReqquests
    return state.updatedData.productRequests.map((request) => {
      return request.status;
    });
  });

  // Use Array.prototype.reduce() to count instances of values in an array
  const countedRoadmapItems = roadmapItemArray.reduce(function (
    allRoadmapItems,
    roadmapItem
  ) {
    if (roadmapItem in allRoadmapItems) {
      allRoadmapItems[roadmapItem]++;
    } else {
      allRoadmapItems[roadmapItem] = 1;
    }
    return allRoadmapItems;
  },
  {});

  // Convert countedRoadmapItems obj into an array of arrays
  const countedRoadmapItemArray = Object.keys(countedRoadmapItems).map(
    (key) => [key, countedRoadmapItems[key]]
  );

  // Sort countedRoadmapItemArray and filter out status: "suggestion"
  const finalRoadmapItemArray = countedRoadmapItemArray
    .sort()
    .filter((item) => {
      return item[0] !== 'suggestion';
    });

  return (
    <Card classes={classes.roadmap}>
      <div className={classes.roadmap__header}>
        <h2>Roadmap</h2>
        <button>View</button>
      </div>
      <div className={classes.roadmap__content}>
        <ol className={classes.roadmap__list}>
          {finalRoadmapItemArray.map((roadmapItem) => (
            <li className={classes['roadmap__list-item']} key={Math.random()}>
              <div>
                {roadmapItem[0]}
                <span>{roadmapItem[1]}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Card>
  );
};

export default SidebarRoadmap;
