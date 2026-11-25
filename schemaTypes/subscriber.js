// schemaTypes/submissions/index.js
// Spread into your schemaTypes array:  ...submissionTypes
import contactSubmission from './contactSubmission'
import sponsorSubmission from './sponsorSubmission'
import equityAccessApplication from './equityAccessApplication'
import subscriber from './subscriber'

export const submissionTypes = [
  contactSubmission,
  sponsorSubmission,
  equityAccessApplication,
  subscriber,
]
