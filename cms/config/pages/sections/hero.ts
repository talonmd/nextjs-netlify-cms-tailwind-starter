import button from '../../partials/button';
import image from '../../partials/image';

const hero = {
  label: 'Hero',
  name: 'hero',
  widget: 'object',
  collapsed: true,
  fields: [
    { label: 'Heading', name: 'heading', widget: 'string' },
    { label: 'Subheading', name: 'subheading', widget: 'string' },
    image,
    {
      label: 'CTA',
      name: 'cta',
      widget: 'object',
      collapsed: true,
      fields: [
        { label: 'Heading', name: 'heading', widget: 'string', required: false },
        { label: 'Text', name: 'text', widget: 'string', required: false },
        { ...button, required: false },
      ],
      required: false,
    },
  ],
};

export default hero;
