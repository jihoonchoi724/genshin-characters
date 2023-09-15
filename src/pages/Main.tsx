import { Outlet } from "react-router-dom";
import { ResponsiveDrawer } from '../components/Drawer';

export const Main = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <ResponsiveDrawer />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div style={{ display: 'flex' }}>
        <Outlet />
      </div>
    </div>
  );
}
