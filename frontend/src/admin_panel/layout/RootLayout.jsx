import { useState } from 'react';
import Navbar from '../commons/Navbar';
import Sidebar from '../commons/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminRootLayout = () => {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const toggleDisplay = () => {
    setDisplaySidebar(!displaySidebar);
  };
  return (
    <>
      <Navbar displaySidebar={displaySidebar} toggleDisplay={toggleDisplay} />
      <div className="admin-root-container">
        <Sidebar
          displaySidebar={displaySidebar}
          toggleSidebar={toggleDisplay}
        />
        <div className="admin-content-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminRootLayout;
