import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { store } from "~/store";
import ThemeCustomization from "../theme";

import { api } from "~/utils/api";

import { Provider } from "react-redux";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <Provider store={store}>
      <ThemeCustomization>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeCustomization>
    </Provider>
  );
};

export default api.withTRPC(MyApp);
