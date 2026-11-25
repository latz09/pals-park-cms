// schemaTypes/submissions/contactSubmission.js
// General inquiries form (Contact page). Written by the website API only.
import {EnvelopeIcon} from '@sanity/icons'
import {
  CONTACT_STATUSES,
  reviewFields,
  reviewFieldset,
  ro,
  submittedAtField,
  wantsUpdatesField,
  submissionOrderings,
  submissionPreview,
} from './submissionShared'

export default {
  name: 'contactSubmission',
  title: 'Contact Submission',
  type: 'document',
  icon: EnvelopeIcon,
  liveEdit: true,
  fieldsets: [reviewFieldset, {name: 'submission', title: 'Submission'}],
  fields: [
    ...reviewFields(CONTACT_STATUSES),
    ro({name: 'name', title: 'Name', type: 'string', fieldset: 'submission'}),
    ro({name: 'phone', title: 'Phone', type: 'string', fieldset: 'submission'}),
    ro({name: 'email', title: 'Email', type: 'string', fieldset: 'submission'}),
    ro({name: 'message', title: 'Message', type: 'text', rows: 5, fieldset: 'submission'}),
    {...wantsUpdatesField, fieldset: 'submission'},
    {...submittedAtField, fieldset: 'submission'},
  ],
  orderings: submissionOrderings,
  preview: submissionPreview('contactSubmission'),
}
