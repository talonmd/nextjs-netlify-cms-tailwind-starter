import link from '../../partials/link';
import metadata from '../../partials/metadata';

const global = {
  file: 'cms/content/settings/global.md',
  label: 'Global',
  name: 'global',
  fields: [
    { label: 'Site Title', name: 'siteTitle', widget: 'string' },
    { ...metadata, label: 'Default Metadata', name: 'defaultMetadata' },
    {
      label: 'Site Banner',
      name: 'siteBanner',
      widget: 'object',
      fields: [{ label: 'Short Text', name: 'shortText', widget: 'string', required: false }, { label: 'Long Text', name: 'longText', widget: 'string', required: false }, link],
    },
  ],
};

export default global;
