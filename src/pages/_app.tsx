import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';
import { store } from '~/components/store';
import ThemeCustomization from '../components/theme';

import { api } from '~/components/utils/api';

import { type NextComponentType } from 'next';
import { Provider } from 'react-redux';
import '~/styles/globals.css';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: NextComponentType;
  pageProps: {
    session: Session | null;
  };
}) => (
  <Provider store={store}>
    <ThemeCustomization>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeCustomization>
  </Provider>
);

export default api.withTRPC(MyApp);
