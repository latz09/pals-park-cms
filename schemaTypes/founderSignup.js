export default {
  name: 'founderSignup',
  type: 'document',
  title: 'Founder Signups',
  description: 'Submissions from the OG Pals founding member pre-sale form on the Coming Soon page.',
  fields: [
    {
      name: 'fullName',
      type: 'string',
      title: 'First and Last Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
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
      name: 'submittedAtDesc',
      by: [{field: 'submittedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'fullName', subtitle: 'email'},
  },
}
