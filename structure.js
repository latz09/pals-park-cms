import {RocketIcon} from '@sanity/icons/Rocket'
import {EnvelopeIcon} from '@sanity/icons/Envelope'
import {CogIcon} from '@sanity/icons/Cog'
import {LinkIcon} from '@sanity/icons/Link'
import {HomeIcon} from '@sanity/icons/Home'
import {FolderIcon} from '@sanity/icons/Folder'
import {EarthGlobeIcon} from '@sanity/icons/EarthGlobe'
import {CommentIcon} from '@sanity/icons/Comment'
import {UsersIcon} from '@sanity/icons/Users'
import {DocumentsIcon} from '@sanity/icons/Documents'

const singletonTypes = [
  'prelaunchPage',
  'seoSettings',
  'siteSettings',
  'navigation',
  'homePage',
  'offeringsPage',
  'equityAccessPage',
  'contactPage',
]

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Navigation')
        .icon(EarthGlobeIcon)
        .child(S.document().schemaType('navigation').documentId('navigation')),
      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('Offerings Page')
        .icon(FolderIcon)
        .child(S.document().schemaType('offeringsPage').documentId('offeringsPage')),
      S.listItem()
        .title('Equity Access Page')
        .icon(UsersIcon)
        .child(S.document().schemaType('equityAccessPage').documentId('equityAccessPage')),
      S.listItem()
        .title('Contact Page')
        .icon(EnvelopeIcon)
        .child(S.document().schemaType('contactPage').documentId('contactPage')),
      S.listItem()
        .title('Pre-Launch Page')
        .icon(RocketIcon)
        .child(S.document().schemaType('prelaunchPage').documentId('prelaunchPage')),
      S.divider(),
      S.listItem()
        .title('FAQ')
        .icon(CommentIcon)
        .child(
          S.documentTypeList('faq')
            .title('FAQ')
            .defaultOrdering([{field: 'order', direction: 'asc'}]),
        ),
      S.divider(),
      S.listItem()
        .title('Contact Form Submissions')
        .icon(EnvelopeIcon)
        .child(
          S.documentTypeList('contactForm')
            .title('Contact Form Submissions')
            .defaultOrdering([{field: 'submittedAt', direction: 'desc'}]),
        ),
      // S.listItem()
      //   .title('Founder Signups')
      //   .icon(EnvelopeIcon)
      //   .child(
      //     S.documentTypeList('founderSignup')
      //       .title('Founder Signups')
      //       .defaultOrdering([{field: 'submittedAt', direction: 'desc'}]),
      //   ),
      S.divider(),
      S.listItem()
        .title('PDF Downloads')
        .icon(DocumentsIcon)
        .child(
          S.documentTypeList('pdfDownload')
            .title('PDF Downloads'),
        ),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(LinkIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('SEO Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('seoSettings').documentId('seoSettings')),
    ])

export const singletonActions = (input, context) => {
  if (singletonTypes.includes(context.schemaType)) {
    return input.filter(
      ({action}) => action && !['unpublish', 'delete', 'duplicate'].includes(action),
    )
  }
  return input
}

export const singletonNewDocument = (prev) =>
  prev.filter((item) => !singletonTypes.includes(item.templateId))