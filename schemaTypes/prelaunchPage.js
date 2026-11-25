// import {seoField} from './partials/seoField'

export default {
  name: 'prelaunchPage',
  type: 'document',
  title: 'Pre-Launch Page',
  groups: [
    {name: 'hero', title: '① Hero'},
    {name: 'about', title: "② What is Pal's Park"},
    {name: 'founders', title: '③ Founders Club'},
    {name: 'seo', title: '🔍 SEO'},
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      initialValue: 'Coming Soon Page',
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
          description: 'Photo of kids playing in the space',
          options: {hotspot: true},
        },
        {
          name: 'headline',
          type: 'string',
          title: 'Headline',
          initialValue: 'Coming soon!',
        },
        {
          name: 'openingDate',
          type: 'string',
          title: 'Opening Timeframe',
          description: 'Exact date/season language — pending final confirmation',
          initialValue: 'Opening February 3rd, 2027',
        },
        {
          name: 'subheadline',
          type: 'text',
          title: 'Subheadline',
          rows: 2,
          initialValue: 'A new indoor year round playground in Wisconsin Rapids.',
        },
      ],
    },

    // ─── 2. WHAT IS PAL'S PARK ─────────────────────────────────
    {
      name: 'about',
      type: 'object',
      title: "What is Pal's Park",
      group: 'about',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
          initialValue: "What is Pal's Park?",
        },
        {
          name: 'body',
          type: 'array',
          title: 'Body Paragraphs',
          description:
            '2-3 short paragraphs. Copy is placeholder pending brand voice work from Pookie.',
          of: [{type: 'text', rows: 4}],
          validation: (Rule) => Rule.min(2).max(5),
          initialValue: [
            "A an overview of what Pal's Park is and maybe where the inspiration for it came from. 2–3 short paragraphs. Copy is placeholder pending brand voice work.",
            'A place where kids can play, explore, and let their imaginations run wild. This new indoor playground in Wisconsin Rapids brings together climbing, basketball, adventure, and more in one exciting space.',
          ],
        },
        {
          name: 'primaryImage',
          type: 'image',
          title: 'Primary Image',
          description: 'Larger featured photo (e.g. child on climbing wall)',
          options: {hotspot: true},
        },
        {
          name: 'secondaryImage',
          type: 'image',
          title: 'Secondary Image',
          description: 'Smaller supporting photo (e.g. child in ball pit)',
          options: {hotspot: true},
        },
      ],
    },

    // ─── 3. FOUNDERS CLUB / EMAIL CAPTURE ──────────────────────
    {
      name: 'founders',
      type: 'object',
      title: 'Founders Club',
      group: 'founders',
      description:
        'Primary functional purpose of the page — email capture for the founding member pre-sale.',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
          description:
            'Program name is a placeholder ("OG Pals") pending a final name from the client.',
          initialValue: 'OG Pals – founding member pre-sale',
        },
        {
          name: 'body',
          type: 'array',
          title: 'Body Paragraphs',
          description:
            '2-5 short paragraphs. Copy is placeholder pending final direction from client.',
          of: [{type: 'text', rows: 4}],
          validation: (Rule) => Rule.min(2).max(5),
          initialValue: [
            'Become part of the Founders Club in two ways: purchase an annual membership or provide a sponsorship, both within the launch period (November through a month after opening the doors).',
            "We believe cost should never be the reason a child doesn't get to play.",
            "Through our Equity Access Program, local businesses and community members can sponsor a family's membership, giving a child in our community a place to run, jump, and belong.",
            'Ask us how to become an OG Founder and have your name on our wall.',
          ],
        },
        // {
        //   name: 'formHeading',
        //   type: 'string',
        //   title: 'Form Heading',
        //   initialValue: 'Fill out the form to join!',
        // },
        // {
        //   name: 'namePlaceholder',
        //   type: 'string',
        //   title: 'Name Field Placeholder Text',
        //   initialValue: 'Your first and last name here',
        // },
        // {
        //   name: 'emailPlaceholder',
        //   type: 'string',
        //   title: 'Email Field Placeholder Text',
        //   initialValue: 'youremail@email.com',
        // },
        // {
        //   name: 'buttonLabel',
        //   type: 'string',
        //   title: 'Submit Button Label',
        //   initialValue: 'Become a founding pal',
        // },
      ],
    },

    // ...seoField,
  ],

  preview: {
    select: {title: 'title'},
  },
}
