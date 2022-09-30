import metadata from '../partials/metadata';
import content from './sections/content';
import hero from './sections/hero';
import newsletter from './sections/newsletter';

const pages = {
  name: 'pages',
  label: 'Pages',
  label_singular: 'Page',
  summary: '{{name}}',
  identifier_field: 'metadata.slug',
  create: true,
  folder: 'cms/content/pages',
  fields: [
    {
      label: 'Name',
      name: 'name',
      widget: 'string',
    },
    {
      label: 'Parent',
      name: 'parent',
      widget: 'relation',
      collection: 'pages',
      search_fields: ['metadata.slug'],
      value_field: '{{metadata.title}}__{{metadata.slug}}',
      display_fields: ['name'],
      required: false,
    },
    {
      label: 'Sections',
      label_singular: 'Section',
      name: 'sections',
      widget: 'list',
      types: [hero, content, newsletter],
    },
    metadata,
  ],
};

export default pages;
