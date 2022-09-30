import { PreviewTemplateComponentProps } from 'netlify-cms-core';

import PageLayout from '../../layouts/PageLayout';
import Sections from '../../components/sections';

const PagePreview: React.FC<PreviewTemplateComponentProps> = ({ entry }) => {
  const name = entry.getIn(['data', 'name']);
  const sections = entry.getIn(['data', 'sections']).toJS();
  const metadata = entry.getIn(['data', 'metadata']).toJS();
  const parent = entry.getIn(['data', 'parent']);

  return (
    <PageLayout seo={metadata}>
      <Sections sections={sections} />
    </PageLayout>
  );
};

export default PagePreview;
