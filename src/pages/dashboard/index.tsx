import React from "react";
import { withAuthDashboard } from "~/components/HOC/withDashboardLayout";
import DashboardLayout from "~/components/layouts/Dashboard";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

export default withAuthDashboard(Dashboard);
