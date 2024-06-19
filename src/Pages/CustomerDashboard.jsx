
import DashboardTopNav from '@/components/DashboardComponents/DashboardTopNav/DashboardTopNav'



import DashboardSideNav from '@/components/DashboardComponents/DashboardSideNav/DashboardSideNav'

import Container from '@/components/uiCustom/Container'
import React from 'react'
import DashboardHeader from '@/components/DashboardComponents/DashboardHeader/DashboardHeader'
import CustomerTable from '@/components/DashboardComponents/CustomerTable/CustomerTable'

const CustomerDashboard = () => {
  return (
    <div>
      <Container px_none>
        <div className="flex">
          <DashboardSideNav />
          <div className="w-4/5 px-6 font-Inter">
            <DashboardTopNav />
            <DashboardHeader heading="Customers" />
            <CustomerTable />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CustomerDashboard
