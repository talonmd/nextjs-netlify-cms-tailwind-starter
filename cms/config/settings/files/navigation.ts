const navigation = {
  file: 'cms/content/settings/navigation.md',
  label: 'Navigation',
  name: 'navigation',
  fields: [
    {
      label: 'Header Navigation',
      label_singular: 'Navigation Item',
      name: 'headerNavigation',
      widget: 'list',
      fields: [
        { label: 'Name', name: 'name', widget: 'string' },
        { label: 'Path', name: 'path', widget: 'relation', collection: 'pages', search_fields: ['metadata.slug'], value_field: 'metadata.slug', display_fields: ['name'] },
        {
          label: 'Children',
          label_singular: 'Item',
          name: 'children',
          widget: 'list',
          fields: [
            { label: 'Name', name: 'name', widget: 'string' },
            { label: 'Path', name: 'path', widget: 'relation', collection: 'pages', search_fields: ['metadata.slug'], value_field: 'metadata.slug', display_fields: ['name'] },
          ],
        },
      ],
    },
  ],
};

export default navigation;
