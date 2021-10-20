import Card from '../UI/Card';
import CategoryItem from './CategoryItem';
import classes from './SidebarCategory.module.css';

const DUMMY_CATEGORY_LIST = [
  'All',
  'UI',
  'UX',
  'Enhancement',
  'Bug',
  'Feature',
];

const SidebarCategory = (props) => {
  return (
    <Card>
      <ul className={classes.test}>
        {DUMMY_CATEGORY_LIST.map((category) => (
          <CategoryItem category={category} key={Math.random()} />
        ))}
      </ul>
    </Card>
  );
};

export default SidebarCategory;
