const paths = {
  file: 'cms/content/settings/paths.md',
  label: 'Paths',
  name: 'paths',
  fields: [
    {
      label: 'Paths',
      label_singular: 'Path',
      name: 'paths',
      widget: 'list',
      fields: [
        { label: 'Parent', name: 'parent', widget: 'relation', collection: 'pages', search_fields: ['metadata.slug'], value_field: '{{metadata.slug}}', display_fields: ['name'] },
        {
          label: 'Children',
          label_singular: 'Child',
          name: 'children',
          required: false,
          widget: 'list',
          fields: [{ label: 'Child', name: 'child', widget: 'relation', collection: 'pages', search_fields: ['metadata.slug'], value_field: '{{metadata.slug}}', display_fields: ['name'] }],
        },
      ],
    },
  ],
};

export default paths;
