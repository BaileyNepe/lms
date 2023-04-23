import type React from 'react';
import styled from 'styled-components';
import { homeLinks } from '~/components/routes';
import Footer from '~/components/ui/molecules/Footer';
import Header from '~/components/ui/molecules/Header';
import Meta from '../Meta';

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
}) => (
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

export default StandardLayout;
