export default {
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  fields: [
    {
      name: 'navLinks',
      type: 'array',
      title: 'Nav Links',
      of: [
        {
          type: 'object',
          name: 'navLink',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'url', type: 'string', title: 'URL' },
            { name: 'isButton', type: 'boolean', title: 'Show as CTA Button', initialValue: false },
            { name: 'isExternal', type: 'boolean', title: 'External Link', initialValue: false },
          ],
          preview: {
            select: { title: 'label', subtitle: 'url', isButton: 'isButton' },
            prepare({ title, subtitle, isButton }) {
              return {
                title: isButton ? `${title} [CTA]` : title,
                subtitle,
              }
            },
          },
        },
      ],
      initialValue: [
        { label: 'Day passes', url: '/offerings#day-passes', isButton: false, isExternal: false },
        { label: 'Memberships', url: '/offerings#memberships', isButton: false, isExternal: false },
        { label: 'Parties', url: '/offerings#parties', isButton: false, isExternal: false },
        {
          label: 'Book now',
          url: '',
          isButton: true,
          isExternal: true,
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Navigation' }
    },
  },
}