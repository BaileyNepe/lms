import React from "react";
import styled from "styled-components";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { homeLinks } from "~/routes";
import Meta from "../Meta";

const Layout = styled.div`
  display: grid;
  grid-template-rows: min-content auto min-content;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const StandardLayout = ({
  children,
  title,
  keywords,
  description,
  image,
}: {
  children: React.ReactNode;
  title?: string;
  keywords?: string;
  description?: string;
  image?: string;
}) => {
  return (
    <>
      <Meta
        title={title}
        keywords={keywords}
        description={description}
        image={image}
      />
      <Layout>
        <Header links={homeLinks} />
        <Main>{children}</Main>
        <Footer />
      </Layout>
    </>
  );
};

export default StandardLayout;
