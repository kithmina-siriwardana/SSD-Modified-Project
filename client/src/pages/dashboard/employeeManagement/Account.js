import React from 'react';

import Header from '../../../components/dashboard/Header';
import EmployeeAccount from '../../../components/dashboard/employeeManagement/EmployeeAccount';
import Sidebar from '../../../components/dashboard/Sidebar';

function Account() {
  return (
    <div>
      <Header />
      <Sidebar/>
      <EmployeeAccount />
    </div>
  );
}

export default Account;