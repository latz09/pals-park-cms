import { structure, singletonActions, singletonNewDocument } from './structure'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
import {buildThemeFromUrl} from '@sanity/themer-legacy'
import {schemaTypes} from './schemaTypes/index.js'

import CustomLayout from './components/CustomLayout.jsx'
import clientLogo from './components/clientLogo.jsx'

const themerTheme = buildThemeFromUrl(
  'https://themer.sanity.build/api/hues?default=64748b;lightest:f8fafc;darkest:0f172a&primary=18a1ad;lightest:ecfeff;darkest:0a4f56&transparent=64748b;lightest:f8fafc;darkest:0f172a&positive=16a34a;lightest:f0fdf4;darkest:14532d&caution=f59e0b;400;lightest:fffbeb;darkest:78350f&critical=dc2626;lightest:fef2f2;darkest:7f1d1d'
)

const brandFont = `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`

const theme = {
  ...themerTheme,
  fonts: {
    ...themerTheme.fonts,
    heading: {...themerTheme.fonts.heading, family: brandFont},
    text:    {...themerTheme.fonts.text,    family: brandFont},
    label:   {...themerTheme.fonts.label,   family: brandFont},
    code:    {...themerTheme.fonts.code,    family: `'JetBrains Mono', monospace`},
  },
}

export default defineConfig({
  name: 'default',
  title: "Pal's Park",
  subtitle: 'Powered by Latz Web Design',
  icon: clientLogo,
  projectId: 'ak4vy7ie',
  dataset: 'production',
  theme,
  releases: {
    enabled: false,
  },
  plugins: [
    structureTool({
      title: 'Manage Content',
      structure,
    }),
    // visionTool()
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: singletonActions,
    newDocumentOptions: singletonNewDocument,
  },
  studio: {
    components: {
      layout: (props) => <CustomLayout {...props} cmsGuideUrl="" />,
    },
  },
})