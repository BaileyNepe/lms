import React from "react";
import { withAuthDashboard } from "~/HOC/withDashboardLayout";
import DashboardLayout from "~/layouts/Dashboard";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

export default withAuthDashboard(Dashboard);
