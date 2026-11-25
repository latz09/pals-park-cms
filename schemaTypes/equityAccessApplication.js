// schemaTypes/submissions/sponsorSubmission.js
// Become a sponsor form (Equity Access page). Written by the website API only.
import {HeartIcon} from '@sanity/icons'
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
  name: 'sponsorSubmission',
  title: 'Sponsor Submission',
  type: 'document',
  icon: HeartIcon,
  liveEdit: true,
  fieldsets: [reviewFieldset, {name: 'submission', title: 'Submission'}],
  fields: [
    ...reviewFields(CONTACT_STATUSES),
    ro({name: 'name', title: 'Name', type: 'string', fieldset: 'submission'}),
    ro({name: 'businessName', title: 'Business name', type: 'string', fieldset: 'submission'}),
    ro({name: 'phone', title: 'Phone', type: 'string', fieldset: 'submission'}),
    ro({name: 'email', title: 'Email', type: 'string', fieldset: 'submission'}),
    ro({name: 'message', title: 'Message', type: 'text', rows: 5, fieldset: 'submission'}),
    {...wantsUpdatesField, fieldset: 'submission'},
    {...submittedAtField, fieldset: 'submission'},
  ],
  orderings: submissionOrderings,
  preview: {
    select: {name: 'name', businessName: 'businessName', status: 'status', submittedAt: 'submittedAt'},
    prepare: (value) => {
      const base = submissionPreview('sponsorSubmission').prepare(value)
      return value.businessName ? {...base, title: `${base.title} (${value.businessName})`} : base
    },
  },
}
