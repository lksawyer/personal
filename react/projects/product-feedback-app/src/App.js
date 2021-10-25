import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarCategory from './components/Sidebar/SidebarCategory';
import SidebarHeader from './components/Sidebar/SidebarHeader';
import SidebarRoadmap from './components/Sidebar/SidebarRoadmap';
import Suggestion from './components/Suggestion/Suggestion';

const App = () => {
  return (
    <Layout>
      <Sidebar>
        <SidebarHeader />
        <SidebarCategory />
        <SidebarRoadmap />
      </Sidebar>
      <Suggestion />
    </Layout>
  );
};

export default App;
