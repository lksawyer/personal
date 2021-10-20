import Card from '../UI/Card';
import classes from './SidebarHeader.module.css';

const SidebarHeader = (props) => {
  return (
    <Card classes={classes.header}>
      <h1 className={classes.header__title}>Frontend Mentor</h1>
      <h2 className={classes['header__sub-title']}>Feedback Board</h2>
    </Card>
  );
};

export default SidebarHeader;
