import classes from './Sidebar.module.css';

const Sidebar = ({ children }) => {
  return <aside className={classes.sidebar}>{children}</aside>;
};

export default Sidebar;
