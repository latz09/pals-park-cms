// schemaTypes/contactPage.js
import { seoField } from './partials/seoField'
import { pdfDownloadsField } from './partials/pdfDownloadsField'

export default {
	name: 'contactPage',
	type: 'document',
	title: 'Contact Page',
	groups: [
		{ name: 'hero', title: '① Hero / Info', default: true },
		{ name: 'form', title: '② Form' },
		{ name: 'faq', title: '③ FAQ Section' },
		{ name: 'seo', title: '🔍 SEO' },
	],
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
			initialValue: 'Contact',
			group: 'hero',
		},

		// ① Hero / Info — left column
		{
			name: 'hero',
			type: 'object',
			title: 'Hero / Info',
			group: 'hero',
			fields: [
				{
					name: 'heading',
					type: 'string',
					title: 'Heading',
					initialValue: 'Have a question or want to learn more?',
				},
				{
					name: 'subheading',
					type: 'text',
					title: 'Subheading',
					rows: 3,
					initialValue:
						"Reach out by filling out the form. We'll be in touch with you in 2-3 business days.",
				},
				{
					name: 'callUs',
					type: 'object',
					title: 'Call Us',
					fields: [
						{
							name: 'label',
							type: 'string',
							title: 'Label',
							initialValue: 'Call us',
						},
						{
							name: 'phone',
							type: 'string',
							title: 'Phone Number',
							initialValue: '555-555-5555',
						},
					],
				},
				{
					name: 'visitUs',
					type: 'object',
					title: 'Visit Us',
					fields: [
						{
							name: 'label',
							type: 'string',
							title: 'Label',
							initialValue: 'Visit us',
						},
						{
							name: 'addressLine1',
							type: 'string',
							title: 'Address Line 1',
							initialValue: 'Future address line here',
						},
						{
							name: 'addressLine2',
							type: 'string',
							title: 'Address Line 2',
							initialValue: 'Wisconsin Rapids, WI',
						},
					],
				},
			],
		},

		// ② Form — right column card
		{
			name: 'form',
			type: 'object',
			title: 'Form',
			description:
				'The input fields themselves are built on the frontend — this just controls the card title and submit button text.',
			group: 'form',
			fields: [
				{
					name: 'formTitle',
					type: 'string',
					title: 'Form Title',
					initialValue: 'For general inquiries',
				},
				{
					name: 'submitButtonText',
					type: 'string',
					title: 'Submit Button Text',
					initialValue: 'Send your message',
				},
			],
		},

		// ③ FAQ Section
		{
			name: 'faqSection',
			type: 'object',
			title: 'FAQ Section',
			group: 'faq',
			description:
				'The questions themselves live in the FAQ collection and are pulled in by the query. This just holds the section intro copy.',
			fields: [
				{
					name: 'heading',
					type: 'string',
					title: 'Heading',
					initialValue: 'Contact FAQ',
				},
				{
					name: 'subheading',
					type: 'string',
					title: 'Subheading',
					initialValue: 'Our most asked questions, answered here.',
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