// schemaTypes/submissions/equityAccessApplication.js
// Apply for equity access form. Written by the website API only.
// Field names match the website's utils/forms/formConfigs.js exactly.
// "<field>Other" holds the typed answer when the person picked "Other".
import {UsersIcon} from '@sanity/icons'
import {
  EQUITY_STATUSES,
  reviewFields,
  reviewFieldset,
  ro,
  submittedAtField,
  submissionOrderings,
  submissionPreview,
} from './submissionShared'

const applicant = 'applicant'
const household = 'household'

export default {
  name: 'equityAccessApplication',
  title: 'Equity Access Application',
  type: 'document',
  icon: UsersIcon,
  liveEdit: true,
  fieldsets: [
    reviewFieldset,
    {name: 'documents', title: 'Supporting documents'},
    {name: applicant, title: 'Applicant'},
    {name: household, title: 'Household & eligibility'},
  ],
  fields: [
    ...reviewFields(EQUITY_STATUSES),

    ro({
      name: 'documents',
      title: 'Uploaded files',
      description: 'Click a file, then use its menu to download it.',
      type: 'array',
      fieldset: 'documents',
      of: [{type: 'file'}],
    }),

    ro({name: 'name', title: 'Parent/guardian name', type: 'string', fieldset: applicant}),
    ro({
      name: 'children',
      title: 'Name and age of child(ren)',
      type: 'text',
      rows: 2,
      fieldset: applicant,
    }),
    ro({
      name: 'relationship',
      title: 'Relationship to child(ren)',
      type: 'string',
      fieldset: applicant,
    }),
    ro({
      name: 'relationshipOther',
      title: 'Relationship (other)',
      type: 'string',
      fieldset: applicant,
    }),
    ro({name: 'address', title: 'Address', type: 'string', fieldset: applicant}),
    ro({name: 'email', title: 'Email', type: 'string', fieldset: applicant}),
    ro({name: 'phone', title: 'Phone', type: 'string', fieldset: applicant}),
    ro({name: 'contactMethod', title: 'Best way to reach', type: 'string', fieldset: applicant}),
    ro({
      name: 'attendanceFrequency',
      title: 'Anticipated attendance',
      type: 'string',
      fieldset: applicant,
    }),
    ro({
      name: 'hearAbout',
      title: 'How they heard about the program',
      type: 'string',
      fieldset: applicant,
    }),
    ro({
      name: 'hearAboutOther',
      title: 'How they heard (other)',
      type: 'string',
      fieldset: applicant,
    }),

    ro({
      name: 'assistanceProgram',
      title: 'Assistance program / criteria',
      type: 'string',
      fieldset: household,
    }),
    ro({
      name: 'assistanceProgramOther',
      title: 'Assistance program (other)',
      type: 'string',
      fieldset: household,
    }),
    ro({
      name: 'qualification',
      title: 'How the family qualifies',
      type: 'string',
      fieldset: household,
    }),
    ro({name: 'householdSize', title: 'Household size', type: 'string', fieldset: household}),
    ro({name: 'householdIncome', title: 'Household income', type: 'string', fieldset: household}),
    ro({
      name: 'householdIncomeOther',
      title: 'Household income (other)',
      type: 'string',
      fieldset: household,
    }),
    ro({
      name: 'accommodations',
      title: 'Accommodations / accessibility needs',
      type: 'text',
      rows: 3,
      fieldset: household,
    }),

    submittedAtField,
  ],
  orderings: submissionOrderings,
  preview: submissionPreview('equityAccessApplication'),
}
