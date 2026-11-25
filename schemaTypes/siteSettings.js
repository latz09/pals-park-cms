import { pdfDownloadsField } from './partials/pdfDownloadsField'

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  groups: [
    {name: 'socials', title: '① Social Media'},
    {name: 'globalCta', title: '② Global CTA'},
    {name: 'newsletter', title: '③ Newsletter Signup'},
    {name: 'pdfDownloads', title: '④ PDF Downloads'},
  ],
  fields: [
    {
      name: 'socials',
      type: 'object',
      title: 'Social Media Links',
      group: 'socials',
      fields: [
        {name: 'facebook', type: 'url', title: 'Facebook URL'},
        {name: 'instagram', type: 'url', title: 'Instagram URL'},
        {name: 'tiktok', type: 'url', title: 'TikTok URL'},
        {name: 'linkedin', type: 'url', title: 'LinkedIn URL'},
      ],
    },
    {
      name: 'globalCta',
      type: 'object',
      title: 'Global CTA',
      group: 'globalCta',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
          initialValue: 'Ready to join the fun?',
        },
        {
          name: 'primaryCta',
          type: 'object',
          title: 'Primary CTA (Memberships)',
          fields: [
            {name: 'label', type: 'string', title: 'Label', initialValue: 'Sign up'},
          ],
        },
        {
          name: 'secondaryCta',
          type: 'object',
          title: 'Secondary CTA (Contact)',
          fields: [
            {name: 'label', type: 'string', title: 'Label', initialValue: 'Contact us'},
          ],
        },
      ],
    },
    {
      name: 'newsletter',
      type: 'object',
      title: 'Newsletter Signup (Footer)',
      group: 'newsletter',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
          initialValue: 'Stay in the loop',
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description',
          rows: 2,
          initialValue: "Receive the latest news and opening updates from Pal's Park, straight to your inbox.",
        },
        {
          name: 'buttonLabel',
          type: 'string',
          title: 'Button Label',
          initialValue: 'Send your message',
        },
      ],
    },
    {
      ...pdfDownloadsField('Footer PDF Downloads'),
      group: 'pdfDownloads',
    },
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
}