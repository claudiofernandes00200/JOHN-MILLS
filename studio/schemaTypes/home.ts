import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({ name: 'heroTagline', title: 'Hero Tagline', type: 'string' }),
    defineField({ name: 'heroTitleLine1', title: 'Hero Line 1', type: 'string' }),
    defineField({ name: 'heroTitleLine1Emphasis', title: 'Hero Line 1 Emphasis', type: 'string' }),
    defineField({ name: 'heroTitleLine2', title: 'Hero Line 2', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text' })
  ],
  preview: {
    prepare() {
      return { title: 'Home Page' };
    }
  }
});
