import dynamic from 'next/dynamic';
import { InitOptions } from 'netlify-cms-core';

import config from '../cms/config';

import PagePreview from '../cms/previews/PagePreview';

const CMS = dynamic(
  (async () => {
    const cms = (await import('netlify-cms-app')).default;
    cms.registerPreviewStyle('/admin/styles.css');
    cms.registerPreviewTemplate('pages', PagePreview);
    cms.init({ config } as InitOptions);
  }) as any,
  { ssr: false, loading: () => <p>Loading...</p> }
);

// const CMS = dynamic(
//   () =>
//     import('netlify-cms-app').then((cms: any) => {
//       cms.registerPreviewStyle('/admin/styles.css');
//       cms.registerPreviewTemplate('pages', PagePreview);
//       cms.init({ config });
//     }) as any,
//   { ssr: false, loading: () => <p>Loading...</p> }
// );

const AdminPage: React.FC = () => {
  return <CMS />;
};

export default AdminPage;
