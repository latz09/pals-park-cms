export default {
  name: 'contactForm',
  type: 'document',
  title: 'Contact Form Submission',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message',
      rows: 4,
    },
    {
      name: 'submittedAt',
      type: 'datetime',
      title: 'Submitted At',
    },
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'submittedDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'email' },
  },
}