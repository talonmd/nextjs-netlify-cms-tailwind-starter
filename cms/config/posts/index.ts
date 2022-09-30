import metadata from '../partials/metadata';

const posts = {
  name: 'posts',
  label: 'Posts',
  label_singular: 'Post',
  summary: '{{name}}',
  identifier_field: 'metadata.slug',
  create: true,
  folder: 'cms/content/posts',
  fields: [
    {
      label: 'Name',
      name: 'name',
      widget: 'string',
    },
    { label: 'Content', name: 'content', widget: 'markdown' },
    metadata,
  ],
};

export default posts;
