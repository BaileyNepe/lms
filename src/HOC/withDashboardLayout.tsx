// components/withDashboardLayout.tsx or hocs/withDashboardLayout.tsx
import React, { ComponentType } from "react";
import DashboardLayout from "~/layouts/Dashboard";
import withAuthentication from "./withAuthentication";

const withDashboardLayout = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const DashboardLayoutComponent: React.FC<P> = (props) => {
    return (
      <DashboardLayout>
        <WrappedComponent {...props} />
      </DashboardLayout>
    );
  };

  return DashboardLayoutComponent;
};

export const withAuthDashboard = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return withAuthentication(withDashboardLayout(WrappedComponent));
};
