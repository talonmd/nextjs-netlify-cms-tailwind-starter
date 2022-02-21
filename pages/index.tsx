import ErrorPage from 'next/error';

import PageLayout from '../layouts/PageLayout';
import { Metadata } from '../layouts/components/Seo';

import Sections from '../components/sections';
import { NextPage } from 'next';

interface IndexPageProps {
  name: string;
  metadata: Metadata;
  sections: any[];
}

const IndexPage: NextPage<IndexPageProps> = ({ name, metadata, sections }) => {
  // Check if the required data was provided
  if (!sections?.length) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <PageLayout seo={metadata}>
      <Sections sections={sections} />
    </PageLayout>
  );
};

export async function getStaticProps() {
  const page = await import('../content/pages/index.md').catch(error => null);

  if (!page) return { props: {} };

  const { name, metadata, sections = [] } = page.attributes;

  return {
    props: {
      name,
      metadata,
      sections,
    },
  };
}

export default IndexPage;
