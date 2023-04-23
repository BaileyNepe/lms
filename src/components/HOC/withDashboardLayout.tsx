// components/withDashboardLayout.tsx or hocs/withDashboardLayout.tsx
import type React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { type ComponentType } from 'react';
import DashboardLayout from '~/components/layouts/Dashboard';
import withAuthentication from './withAuthentication';

const withDashboardLayout = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const DashboardLayoutComponent: React.FC<P> = (props) => (
    <DashboardLayout>
      <WrappedComponent {...props} />
    </DashboardLayout>
  );

  return DashboardLayoutComponent;
};

export const withAuthDashboard = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => withAuthentication(withDashboardLayout(WrappedComponent));
