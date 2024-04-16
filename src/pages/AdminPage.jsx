import 'bootstrap/dist/css/bootstrap.min.css';
import AdminRightPanel from '../Components/AdminRightPanel';
import AdminLeftPanel from '../Components/AdminLeftPanel';
import AdminBottomPanel from '../Components/AdminBottomPanel';
import React from 'react';

function AdminPage() {
  return (
    <div className="AdminPage">
      <div>
        <div className="Left">
          <AdminLeftPanel />
        </div>
        <div className="Right">
          <AdminRightPanel />
        </div>
      </div>
      <div className="Bottom">
        <AdminBottomPanel />
      </div>
    </div>
  );
}

export default AdminPage;

