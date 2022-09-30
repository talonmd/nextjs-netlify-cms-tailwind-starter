const metadata = {
  label: 'Metadata',
  name: 'metadata',
  widget: 'object',
  fields: [
    { label: 'Title', name: 'title', widget: 'string' },
    { label: 'Slug', name: 'slug', widget: 'string' },
    { label: 'Description', name: 'description', widget: 'text', required: false },
    { label: 'Share Image', name: 'shareImage', widget: 'image', required: false },
    { label: 'Twitter Username', name: 'twitterUsername', widget: 'string', required: false },
    { label: 'Twitter Card Type', name: 'twitterCardType', widget: 'select', options: ['summary', 'summary_large_image', 'app', 'player'], required: false },
    { label: 'Overwrite Title', name: 'titleOverwrite', widget: 'boolean', required: false },
  ],
};

export default metadata;
