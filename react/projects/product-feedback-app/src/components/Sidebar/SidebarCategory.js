import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import CategoryItem from './CategoryItem';
import classes from './SidebarCategory.module.css';

const SidebarCategory = (props) => {
  // Use redux to pull out categories obj
  const categoryList = useSelector((state) => {
    // Flatten state.updatedData.categories obj
    return Object.keys(state.updatedData.categories).map((key) => [
      key,
      state.updatedData.categories[key],
    ]);
  });

  return (
    <Card>
      <ul className={classes.test}>
        {categoryList.map((category) => (
          <CategoryItem
            category={category[0]}
            key={Math.random()}
            active={category[1]}
          />
        ))}
      </ul>
    </Card>
  );
};

export default SidebarCategory;
