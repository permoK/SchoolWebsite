import { type SchemaTypeDefinition } from 'sanity'
import navigation from './navigation'
import page from './page'
import home from './home'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [navigation, page, home],
} 