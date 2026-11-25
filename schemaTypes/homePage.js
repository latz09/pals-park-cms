// schemaTypes/homePage.js
import { seoField } from './partials/seoField'
import { pdfDownloadsField } from './partials/pdfDownloadsField'

export default {
	name: 'homePage',
	type: 'document',
	title: 'Home Page',
	groups: [
		{ name: 'hero', title: '① Hero' },
		{ name: 'foundersStory', title: '② Founders Story' },
		{ name: 'brandPillars', title: '③ Brand Pillars' },
		{ name: 'foundersClub', title: '④ Founders Club' },
		{ name: 'faq', title: '⑤ FAQ' },
		{ name: 'closingCta', title: '⑥ Closing CTA' },
		{ name: 'seo', title: '🔍 SEO' },
	],
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Page Title',
			initialValue: 'Home',
		},

		// ─── 1. HERO ───────────────────────────────────────────────
		{
			name: 'hero',
			type: 'object',
			title: 'Hero',
			group: 'hero',
			fields: [
				{
					name: 'heroImage',
					type: 'image',
					title: 'Hero Image',
					description:
						'Reusing the Coming Soon family photo for now. Swap in real interior photos once build-out is complete.',
					options: { hotspot: true },
				},
				{
					name: 'headline',
					type: 'string',
					title: 'Headline',
					initialValue: 'Play. Jump. Party.',
				},
				{
					name: 'subheadline',
					type: 'text',
					title: 'Subheadline',
					rows: 2,
					initialValue:
						"Wisconsin Rapids' locally owned and operated indoor playground, serving families across Central Wisconsin, open 365 days a year, rain, shine, or snow.",
				},
				{
					name: 'getMembershipCta',
					type: 'object',
					title: 'Get a Membership CTA',
					fields: [
						{ name: 'label', type: 'string', title: 'Label', initialValue: 'Get a membership' },
						{
							name: 'url',
							type: 'string',
							title: 'URL',
							description: 'Rhomb product link. Placeholder until Pookie sends the real one.',
						},
						{ name: 'isExternal', type: 'boolean', title: 'External Link', initialValue: true },
					],
				},
				{
					name: 'buyDayPassCta',
					type: 'object',
					title: 'Buy a Day Pass CTA',
					fields: [
						{ name: 'label', type: 'string', title: 'Label', initialValue: 'Buy a day pass' },
						{
							name: 'url',
							type: 'string',
							title: 'URL',
							description: 'Rhomb product link. Placeholder until Pookie sends the real one.',
						},
						{ name: 'isExternal', type: 'boolean', title: 'External Link', initialValue: true },
					],
				},
				{
					name: 'bookPartyCta',
					type: 'object',
					title: 'Book a Party CTA',
					fields: [
						{ name: 'label', type: 'string', title: 'Label', initialValue: 'Book a party' },
						{
							name: 'url',
							type: 'string',
							title: 'URL',
							description: 'Rhomb product link. Placeholder until Pookie sends the real one.',
						},
						{ name: 'isExternal', type: 'boolean', title: 'External Link', initialValue: true },
					],
				},
			],
		},

		// ─── 2. FOUNDERS STORY ─────────────────────────────────────
		{
			name: 'foundersStory',
			type: 'object',
			title: 'Founders Story',
			group: 'foundersStory',
			fields: [
				{
					name: 'heading',
					type: 'string',
					title: 'Heading',
					initialValue: "Hello! We're the Hewitts",
				},
				{
					name: 'intro',
					type: 'text',
					title: 'Intro Paragraph',
					rows: 3,
					initialValue:
						"Pal's Park was born from a simple wish as parents of our four-year-old: a place to play, jump, and be a kid all year round, no matter the weather.",
				},
				{
					name: 'primaryImage',
					type: 'image',
					title: 'Primary Image',
					description: 'Photo of Alex & Allison',
					options: { hotspot: true },
				},
				{
					name: 'secondaryImage',
					type: 'image',
					title: 'Secondary Image',
					description: 'Photo of their daughter',
					options: { hotspot: true },
				},
				{
					name: 'storySections',
					type: 'array',
					title: 'Story Sections',
					description:
						'E.g. "Deep Roots," "Why an indoor playground?" Add, remove, or reorder as needed.',
					validation: (Rule) => Rule.min(1).max(5),
					of: [
						{
							type: 'object',
							name: 'storySection',
							fields: [
								{ name: 'title', type: 'string', title: 'Title' },
								{
									name: 'paragraphs',
									type: 'array',
									title: 'Paragraphs',
									of: [{ type: 'text', rows: 4 }],
									validation: (Rule) => Rule.min(1).max(4),
								},
							],
							preview: {
								select: { title: 'title' },
							},
						},
					],
					initialValue: [
						{
							title: 'Deep Roots',
							paragraphs: [
								"Allison's great-great-grandfather came to Wisconsin Rapids in the 1850s and established himself as one of the community's earliest tradespeople. The generations since have stayed rooted here, shaping the civic life of the Wisconsin Rapids area along the way. Allison grew up understanding that showing up, being involved, and meeting the needs of a changing community make the world a better place.",
								'The advice from a grandfather she never met was to "do anything you want, as long as you can support yourself and live with no regrets." She spent years away from home before coming back for good in 2017, thanks to the gentle tug of family and meeting Alex two years prior.',
								"Alex's family arrived at the turn of the twentieth century when his great-grandfather, an immigrant from Denmark, opened a bakery and began building something of his own. The generations that followed put down roots here too. Alex moved back home to Wisconsin Rapids in 2015, and he and Allison have been building something together ever since.",
							],
						},
						{
							title: 'Why an indoor playground?',
							paragraphs: [
								'We believe Wisconsin Rapids is a great place to raise a family and enjoy the outdoors. We also know winters can be long, and the weather (any time of year) is unpredictable. We also believe kids, and parents, need a real break from screens, a place to move, play, and connect face to face instead. We hope this playground fills a void in the community, and this can feel like your third option other than home or school. We plan to be open every day of the year so we can shake our sillies out, no matter the weather, and even on a holiday.',
								"Together, we are part of this community for the long haul. Pal's Park is the next chapter of two families that have been building things here for more than a century.",
							],
						},
					],
				},
				{
					name: 'closingImage',
					type: 'image',
					title: 'Closing Image',
					description: 'The aerial Wisconsin Rapids shot at the end of the section.',
					options: { hotspot: true },
				},
			],
		},

		// ─── 3. BRAND PILLARS ──────────────────────────────────────
		{
			name: 'brandPillars',
			type: 'object',
			title: 'Brand Pillars',
			group: 'brandPillars',
			fields: [
				{
					name: 'heading',
					type: 'string',
					title: 'Heading',
					initialValue: "Why families love Pal's Park",
				},
				{
					name: 'pillars',
					type: 'array',
					title: 'Pillars',
					validation: (Rule) => Rule.min(1).max(6),
					of: [
						{
							type: 'object',
							name: 'pillar',
							fields: [
								{
									name: 'icon',
									type: 'file',
									title: 'Icon',
									description:
										'SVG only. Uploaded as a file (not an image) so it renders crisp and untouched — the image pipeline would rasterize it.',
									options: { accept: '.svg' },
								},
								{ name: 'title', type: 'string', title: 'Title' },
								{ name: 'description', type: 'text', title: 'Description', rows: 3 },
							],
							preview: {
								select: { title: 'title', subtitle: 'description' },
							},
						},
					],
					initialValue: [
						{
							title: 'Safe & Clean Play',
							description:
								'Equipment you can trust, a space kept tidy, and a park built around unplugged, open-ended play.',
						},
						{
							title: 'Locally Owned',
							description:
								'A Wisconsin Rapids family, generations deep, not a franchise passing through.',
						},
						{
							title: 'Fun for Every Age',
							description: 'Zones built for toddlers through older kids, all under one roof.',
						},
					],
				},
			],
		},

		// ─── 4. FOUNDERS CLUB ──────────────────────────────────────
		{
			name: 'foundersClub',
			type: 'object',
			title: 'Founders Club',
			group: 'foundersClub',
			fields: [
				{
					name: 'heading',
					type: 'string',
					title: 'Heading',
					initialValue: "Join the Pal's OG founders club",
				},
				{
					name: 'body',
					type: 'text',
					title: 'Body',
					rows: 4,
					initialValue:
						'One club, two ways in: an annual family membership, or a $500 business sponsorship that funds the Equity Access Program for families who need a hand. Ask us how to become an OG Founder and have your name on our wall.',
				},
				{
					name: 'joinAsFamilyCta',
					type: 'object',
					title: 'Join as a Family CTA',
					fields: [
						{ name: 'label', type: 'string', title: 'Label', initialValue: 'Join as a family' },
						{
							name: 'url',
							type: 'string',
							title: 'URL',
							description: 'Rhomb product link. Placeholder until Pookie sends the real one.',
						},
					],
				},
				{
					name: 'becomeSponsorCta',
					type: 'object',
					title: 'Become a Sponsor CTA',
					fields: [
						{ name: 'label', type: 'string', title: 'Label', initialValue: 'Become a sponsor' },
						{
							name: 'url',
							type: 'string',
							title: 'URL',
							description: 'HubSpot form link.',
						},
					],
				},
				{
					name: 'applyForEquityAccessCta',
					type: 'object',
					title: 'Apply for Equity Access CTA',
					fields: [
						{
							name: 'label',
							type: 'string',
							title: 'Label',
							initialValue: 'Apply for equity access',
						},
						{
							name: 'url',
							type: 'string',
							title: 'URL',
						},
					],
				},
				{
					name: 'nonprofitFaq',
					type: 'object',
					title: 'Nonprofit / Tax-Exempt FAQ',
					description:
						'Standalone Q&A tied to the Equity Access Program. Not part of the general FAQ list below.',
					fields: [
						{
							name: 'question',
							type: 'string',
							title: 'Question',
							initialValue: "Is Pal's Park a nonprofit or tax-exempt organization?",
						},
						{
							name: 'answer',
							type: 'text',
							title: 'Answer',
							rows: 6,
							initialValue:
								"No. Pal's Park LLC is a locally owned, for-profit family business. We looked closely at nonprofit status when designing our Equity Access Program, but a family-owned recreation business like ours doesn't fit neatly into the categories the IRS recognizes for tax exemption. Sponsorships aren't charitable, tax-deductible donations, though many businesses treat the public recognition that comes with sponsoring (a listing on our sponsor wall, website, and social media) as a marketing or advertising expense. We recommend sponsors check with their own accountant or tax advisor on how their sponsorship should be treated, and we're always happy to work out a sponsorship that fits your marketing goals.",
						},
					],
				},
			],
		},

		// ─── 5. FAQ ────────────────────────────────────────────────
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
					initialValue: "Pal's Park FAQ",
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

		// ─── 6. CLOSING CTA ────────────────────────────────────────
		{
			name: 'closingCta',
			type: 'object',
			title: 'Closing CTA',
			group: 'closingCta',
			fields: [
				{
					name: 'heading',
					type: 'string',
					title: 'Heading',
					initialValue: 'Ready to join the fun?',
				},
				{
					name: 'cta',
					type: 'object',
					title: 'CTA',
					fields: [
						{ name: 'label', type: 'string', title: 'Label', initialValue: 'Sign up' },
						{ name: 'url', type: 'string', title: 'URL', initialValue: '/offerings' },
						{ name: 'isExternal', type: 'boolean', title: 'External Link', initialValue: false },
					],
				},
			],
		},

		...seoField.map((f) => ({ ...f, group: 'seo' })),
	],

	preview: {
		select: { title: 'title' },
	},
}