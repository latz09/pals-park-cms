import {seoField} from './partials/seoField'
import {pdfDownloadsField} from './partials/pdfDownloadsField'

export default {
  name: 'offeringsPage',
  type: 'document',
  title: 'Offerings Page',
  groups: [
    {name: 'intro', title: '① Intro'},
    {name: 'memberships', title: '② Memberships'},
    {name: 'dayPasses', title: '③ Day Passes'},
    {name: 'parties', title: '④ Birthday Parties'},
    {name: 'closingCta', title: '⑤ Closing CTA'},
    {name: 'seo', title: '🔍 SEO'},
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      initialValue: 'Offerings',
    },

    // ─── 1. INTRO ──────────────────────────────────────────────
    {
      name: 'intro',
      type: 'object',
      title: 'Intro',
      group: 'intro',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
          initialValue: 'What we have to offer',
        },
        {
          name: 'body',
          type: 'array',
          title: 'Body Paragraphs',
          of: [{type: 'text', rows: 3}],
          validation: (Rule) => Rule.max(3),
          initialValue: [
            'Three ways to visit: memberships, single-visit day passes, or a private party room.',
            'Vending machines are on-site for snacks and drinks (no on-site kitchen).',
          ],
        },
        {
          name: 'heroImage',
          type: 'image',
          title: 'Hero Image',
          options: {hotspot: true},
        },
        {
          name: 'jumpLinks',
          type: 'object',
          title: 'Jump Links',
          description: 'These scroll to the sections below on this same page.',
          fields: [
            {
              name: 'membershipsLabel',
              type: 'string',
              title: 'All Memberships Label',
              initialValue: 'All memberships',
            },
            {
              name: 'membershipsUrl',
              type: 'string',
              title: 'All Memberships Anchor',
              initialValue: '/offerings#memberships',
            },
            {
              name: 'dayPassesLabel',
              type: 'string',
              title: 'Day Passes Label',
              initialValue: 'Day passes',
            },
            {
              name: 'dayPassesUrl',
              type: 'string',
              title: 'Day Passes Anchor',
              initialValue: '/offerings#day-passes',
            },
            {
              name: 'partiesLabel',
              type: 'string',
              title: 'Book a Party Label',
              initialValue: 'Book a party',
            },
            {
              name: 'partiesUrl',
              type: 'string',
              title: 'Book a Party Anchor',
              initialValue: '/offerings#parties',
            },
          ],
        },
      ],
    },

    // ─── 2. MEMBERSHIPS ────────────────────────────────────────
    {
      name: 'membershipsSection',
      type: 'object',
      title: 'Memberships',
      group: 'memberships',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
          initialValue: 'Our memberships',
        },
        {
          name: 'monthlyLinkLabel',
          type: 'string',
          title: 'Monthly Link Label',
          description: 'Applies to every membership tier below.',
          initialValue: 'Buy monthly',
        },
        {
          name: 'annualLinkLabel',
          type: 'string',
          title: 'Annual Link Label',
          description: 'Applies to every membership tier below.',
          initialValue: 'Buy annually',
        },
        {
          name: 'memberships',
          type: 'array',
          title: 'Membership Tiers',
          description: 'Add, edit, or remove tiers freely.',
          validation: (Rule) => Rule.min(1),
          of: [
            {
              type: 'object',
              name: 'membership',
              fields: [
                {
                  name: 'name',
                  type: 'string',
                  title: 'Name',
                  description: 'e.g. "2 Adults + 1 Child"',
                },
                {name: 'price', type: 'string', title: 'Price', description: 'e.g. "$30/ month"'},
                {
                  name: 'linkOne',
                  type: 'object',
                  title: 'Monthly Link',
                  fields: [
                    {
                      name: 'url',
                      type: 'string',
                      title: 'URL',
                      description:
                        'Rhomb product link. Placeholder until Pookie sends the real one.',
                    },
                    {
                      name: 'isExternal',
                      type: 'boolean',
                      title: 'External Link',
                      initialValue: true,
                    },
                  ],
                },
                {
                  name: 'linkTwo',
                  type: 'object',
                  title: 'Annual Link',
                  fields: [
                    {
                      name: 'url',
                      type: 'string',
                      title: 'URL',
                      description:
                        'Rhomb product link. Placeholder until Pookie sends the real one.',
                    },
                    {
                      name: 'isExternal',
                      type: 'boolean',
                      title: 'External Link',
                      initialValue: true,
                    },
                  ],
                },
              ],
              preview: {
                select: {title: 'name', subtitle: 'price'},
              },
            },
          ],
          initialValue: [
            {
              name: '2 Adults + 1 Child',
              price: '$30/ month',
              linkOne: {isExternal: true},
              linkTwo: {isExternal: true},
            },
            {
              name: '2 Adults + 2 Children',
              price: '$50/ month',
              linkOne: {isExternal: true},
              linkTwo: {isExternal: true},
            },
            {
              name: '2 Adults + 3 Children',
              price: '$60/ month',
              linkOne: {isExternal: true},
              linkTwo: {isExternal: true},
            },
            {
              name: '2 Adults + 4 Children',
              price: '$70/ month',
              linkOne: {isExternal: true},
              linkTwo: {isExternal: true},
            },
            {
              name: '2 Adults + 5+ Children',
              price: '$80/ month',
              linkOne: {isExternal: true},
              linkTwo: {isExternal: true},
            },
          ],
        },
        {
          name: 'additionalAdultAddOn',
          type: 'object',
          title: 'Additional Adult Add-On',
          description: 'No CTA on this one. Informational only.',
          fields: [
            {name: 'label', type: 'string', title: 'Label', initialValue: 'Additional Adult'},
            {name: 'price', type: 'string', title: 'Price', initialValue: '$5/ month'},
          ],
        },
        {
          name: 'annualNote',
          type: 'text',
          title: 'Annual Memberships Note',
          rows: 3,
          initialValue:
            'Annual memberships include two and a half months free compared to paying monthly. Memberships renew automatically until cancelled (3 days notice required before the renewal date), and every membership includes unlimited play during all open hours.',
        },
        {
          name: 'accompanyingAdultsQa',
          type: 'array',
          title: 'Q&A',
          description: 'E.g. "Who can accompany a child\'s membership?" Add more pairs as needed.',
          of: [
            {
              type: 'object',
              name: 'qaItem',
              fields: [
                {name: 'question', type: 'string', title: 'Question'},
                {name: 'answer', type: 'text', title: 'Answer', rows: 3},
              ],
              preview: {
                select: {title: 'question'},
              },
            },
          ],
          initialValue: [
            {
              question: "Who can accompany a child's membership?",
              answer:
                'Membership follows the child and includes up to 2 accompanying adults of your choosing: parents, grandparents, guardians, or other trusted caregivers. No specific relationship is required.',
            },
          ],
        },
        pdfDownloadsField('Membership PDF Downloads'),
        {
          name: 'image',
          type: 'image',
          title: 'Section Image',
          options: {hotspot: true},
        },
      ],
    },

    // ─── 3. DAY PASSES ─────────────────────────────────────────
    {
      name: 'dayPassesSection',
      type: 'object',
      title: 'Day Passes',
      group: 'dayPasses',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
          initialValue: 'Day passes',
        },
        {
          name: 'dayPass',
          type: 'object',
          title: 'Day Pass',
          fields: [
            {name: 'overline', type: 'string', title: 'Overline', initialValue: 'Day Pass'},
            {name: 'label', type: 'string', title: 'Label', initialValue: 'Day pass, ages 1-17'},
            {name: 'price', type: 'string', title: 'Price', initialValue: '$12 / per child'},
            {
              name: 'note',
              type: 'string',
              title: 'Note',
              initialValue: 'Up to 2 accompanying adults included',
            },
            {name: 'ctaLabel', type: 'string', title: 'CTA Label', initialValue: 'Buy now'},
            {
              name: 'url',
              type: 'string',
              title: 'URL',
              description: 'Rhomb product link. Placeholder until Pookie sends the real one.',
            },
            {name: 'isExternal', type: 'boolean', title: 'External Link', initialValue: true},
          ],
        },
        {
          name: 'infantEntry',
          type: 'object',
          title: 'Infant Entry',
          fields: [
            {name: 'overline', type: 'string', title: 'Overline', initialValue: 'Under 12 Months'},
            {
              name: 'label',
              type: 'string',
              title: 'Label',
              initialValue: 'Infant entry, under 12 months',
            },
            {name: 'price', type: 'string', title: 'Price', initialValue: 'Free'},
            {
              name: 'note',
              type: 'string',
              title: 'Note',
              initialValue: 'With a paying older sibling',
            },
            {name: 'ctaLabel', type: 'string', title: 'CTA Label', initialValue: 'Buy now'},
            {
              name: 'url',
              type: 'string',
              title: 'URL',
              description: 'Rhomb product link. Placeholder until Pookie sends the real one.',
            },
            {name: 'isExternal', type: 'boolean', title: 'External Link', initialValue: true},
          ],
        },
        {
          name: 'aboutBlurb',
          type: 'text',
          title: 'About Blurb',
          rows: 3,
          initialValue:
            'One flat rate, good for unlimited access the entire day for the child or children it covers. Passes are non-refundable and non-transferable; adults may not enter without an accompanying child.',
        },
      ],
    },

    // ─── 4. BIRTHDAY PARTIES ───────────────────────────────────
    {
      name: 'partiesSection',
      type: 'object',
      title: 'Birthday Parties',
      group: 'parties',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
          initialValue: 'Birthday Parties',
        },
        {
          name: 'package',
          type: 'object',
          title: 'Party Room Package',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {hotspot: true},
            },
            {name: 'label', type: 'string', title: 'Label', initialValue: 'Exclusive Use'},
            {name: 'heading', type: 'string', title: 'Heading', initialValue: 'Party room'},
            {name: 'price', type: 'string', title: 'Price', initialValue: '$250'},
            {
              name: 'details',
              type: 'array',
              title: 'Details',
              of: [{type: 'text', rows: 3}],
              initialValue: [
                'Up to 20 children and 10 adults per room. Members save 10% on the room and member kids are free. Non-member kids are $9 each.',
                '$150 deposit holds your date.',
              ],
            },
            {
              name: 'ctaLabel',
              type: 'string',
              title: 'CTA Label',
              initialValue: 'Book the party room',
            },
            {
              name: 'url',
              type: 'string',
              title: 'URL',
              description: 'Rhomb product link. Placeholder until Pookie sends the real one.',
            },
            {name: 'isExternal', type: 'boolean', title: 'External Link', initialValue: true},
          ],
        },
        {
          name: 'photos',
          type: 'array',
          title: 'Party Room Photos',
          description: 'Placeholder until build-out progresses.',
          of: [
            {
              type: 'object',
              name: 'partyPhoto',
              fields: [
                {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
                {name: 'alt', type: 'string', title: 'Alt Text'},
              ],
              preview: {select: {title: 'alt', media: 'image'}},
            },
          ],
        },
        {
          name: 'policyBody',
          type: 'text',
          title: 'Policy Body',
          rows: 5,
          initialValue:
            'Your own private room with tables, chairs, a countertop, and a sink. Bring your own food, cake, and non-alcoholic drinks. A $150 deposit holds your date. Every parent or guardian needs to sign a waiver, and the host stays for the whole party. Cancellation, rescheduling, and cleanup details are in our full party room policy.',
        },
        pdfDownloadsField('Party Policy PDF Downloads'),
      ],
    },

    // ─── 5. CONTACT ────────────────────────────────────────────
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
          name: 'subheading',
          type: 'string',
          title: 'Subheading',
          initialValue: 'Sign up now to secure your spot!',
        },
        {
          name: 'cta',
          type: 'object',
          title: 'CTA',
          fields: [
            {name: 'label', type: 'string', title: 'Label', initialValue: 'Sign up'},
            // {name: 'url', type: 'string', title: 'URL', initialValue: '/offerings'},
            // {name: 'isExternal', type: 'boolean', title: 'External Link', initialValue: false},
          ],
        },
      ],
    },

    ...seoField.map((f) => ({...f, group: 'seo'})),
  ],

  preview: {
    select: {title: 'title'},
  },
}
