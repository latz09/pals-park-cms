// schemaTypes/partials/pdfDownloadsField.js

// Reusable "pick which PDFs show here" field — points at the shared
// pdfDownload document type, so the same PDFs can be reused in any
// FAQ section (or any other section) without re-uploading. Each
// pdfDownload document carries its own buttonLabel + file — this
// field just picks which ones show, and in what order.
export const pdfDownloadsField = (title = 'PDF Downloads') => ({
	name: 'pdfDownloads',
	type: 'array',
	title,
	description: 'Choose which PDFs show here, in order.',
	of: [{ type: 'reference', to: [{ type: 'pdfDownload' }] }],
})