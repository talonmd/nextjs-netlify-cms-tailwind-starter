const link = {
  label: 'Link',
  name: 'link',
  widget: 'object',
  required: false,
  fields: [
    { label: 'Href', name: 'href', widget: 'string', required: false },
    { label: 'Text', name: 'text', widget: 'string', required: false },
    { label: 'External', name: 'external', widget: 'boolean', default: false, required: false },
  ],
};

export default link;
