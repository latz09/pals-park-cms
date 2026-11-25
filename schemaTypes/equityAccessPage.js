// schemaTypes/equityAccessPage.js
import { seoField } from './partials/seoField'
import { pdfDownloadsField } from './partials/pdfDownloadsField'

// Reusable shape for every "heading + paragraph array" block on this page.
const headingBlock = ({ headingInitial = '', maxParagraphs = 3 } = {}) => [
	{
		name: 'heading',
		type: 'string',
		title: 'Heading',
		initialValue: headingInitial,
	},
	{
		name: 'subheading',
		type: 'array',
		title: 'Subheading',
		description: 'Each item renders as its own paragraph.',
		of: [{ type: 'text', rows: 4 }],
		validation: (Rule) => Rule.max(maxParagraphs),
	},
]

export default {
	name: 'equityAccessPage',
	type: 'document',
	title: 'Equity Access Page',
	groups: [
		{ name: 'hero', title: '① Hero', default: true },
		{ name: 'formOne', title: '② Form One' },
		{ name: 'formTwo', title: '③ Form Two' },
		{ name: 'faqSection', title: '④ FAQ Section' },
		{ name: 'seo', title: '🔍 SEO' },
	],
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
			initialValue: 'Equity Access',
			group: 'hero',
		},

		// ① Hero
		{
			name: 'hero',
			type: 'object',
			title: 'Hero',
			group: 'hero',
			fields: headingBlock({ headingInitial: 'Equity Access' }),
		},

		// ② Form One (form itself is built on the frontend)
		{
			name: 'formOne',
			type: 'object',
			title: 'Form One',
			description: 'Heading + intro copy above the first form.',
			group: 'formOne',
			fields: headingBlock(),
		},

		// ③ Form Two (form itself is built on the frontend)
		{
			name: 'formTwo',
			type: 'object',
			title: 'Form Two',
			description: 'Heading + intro copy above the second form.',
			group: 'formTwo',
			fields: headingBlock(),
		},

		// ④ FAQ Section
		{
			name: 'faqSection',
			type: 'object',
			title: 'FAQ Section',
			group: 'faqSection',
			fields: [
				...headingBlock({ headingInitial: 'Frequently Asked Questions' }),
				{
					name: 'faqs',
					type: 'array',
					title: 'FAQs',
					description: 'Drag to reorder. Display order matches this list.',
					of: [
						{
							type: 'object',
							name: 'faqItem',
							title: 'FAQ',
							fields: [
								{
									name: 'question',
									type: 'string',
									title: 'Question',
									validation: (Rule) => Rule.required(),
								},
								{
									name: 'answer',
									type: 'text',
									title: 'Answer',
									rows: 4,
									validation: (Rule) => Rule.required(),
								},
							],
							preview: {
								select: { title: 'question', subtitle: 'answer' },
							},
						},
					],
				},
				pdfDownloadsField(),
			],
		},

		...seoField.map((f) => ({ ...f, group: 'seo' })),
	],
	preview: {
		select: { title: 'title' },
	},
}