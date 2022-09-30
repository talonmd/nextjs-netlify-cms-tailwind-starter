const image = {
  label: 'Image',
  name: 'image',
  widget: 'object',
  fields: [
    { label: 'Source', name: 'source', widget: 'image' },
    { label: 'Alt', name: 'alt', widget: 'string' },
    { label: 'Caption', name: 'caption', widget: 'string', required: false },
  ],
};

export default image;
