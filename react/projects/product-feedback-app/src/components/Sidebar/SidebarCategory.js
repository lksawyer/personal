import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import CategoryItem from './CategoryItem';
import classes from './SidebarCategory.module.css';

const SidebarCategory = (props) => {
  // // Use redux to pull out categories obj
  // const categoryList = useSelector((state) => {
  //   // Flatten state.updatedData.categories obj
  //   return Object.keys(state.updatedData.categories).map((key) => [
  //     key,
  //     state.updatedData.categories[key],
  //   ]);
  // });

  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.category.categoryList);
  const activeCategory = useSelector((state) => state.category.active);

  return (
    <Card>
      <ul className={classes.test}>
        {categoryList.map((category) => (
          <CategoryItem
            category={category}
            key={Math.random()}
            active={activeCategory}
          />
        ))}
      </ul>
    </Card>
  );
};

export default SidebarCategory;
