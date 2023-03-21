import React from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { homeLinks } from "~/routes";
import Meta from "../Meta";

const StandardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meta />
      <Header links={homeLinks} />
      {children}
      <Footer />
    </>
  );
};

export default StandardLayout;
