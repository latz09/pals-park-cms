// schemaTypes/pdfDownload.js
// Unchanged — included for completeness, this is the doc type every
// pdfDownloads reference points at.
export default {
	name: 'pdfDownload',
	type: 'document',
	title: 'PDF Download',
	fields: [
		{
			name: 'buttonLabel',
			type: 'string',
			title: 'Button Label',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'file',
			type: 'file',
			title: 'PDF',
			options: { accept: '.pdf' },
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: { title: 'buttonLabel', subtitle: 'file.asset.originalFilename' },
	},
}