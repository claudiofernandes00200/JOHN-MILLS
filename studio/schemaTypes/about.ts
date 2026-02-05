import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({ name: 'image', title: 'Image URL', type: 'string' })
      ]
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [defineArrayMember({ type: 'text' })]
        }),
        defineField({
          name: 'highlights',
          title: 'Highlights',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })]
        }),
        defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' })
      ]
    }),
    defineField({
      name: 'visual',
      title: 'Visual',
      type: 'object',
      fields: [
        defineField({ name: 'cardImage', title: 'Card Image URL', type: 'string' }),
        defineField({ name: 'cardTitle', title: 'Card Title', type: 'string' }),
        defineField({ name: 'cardSubtitle', title: 'Card Subtitle', type: 'string' }),
        defineField({
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'value', title: 'Value', type: 'string' }),
                defineField({ name: 'label', title: 'Label', type: 'string' })
              ]
            })
          ]
        }),
        defineField({ name: 'promiseTitle', title: 'Promise Title', type: 'string' }),
        defineField({ name: 'promiseText', title: 'Promise Text', type: 'text' })
      ]
    })
  ],
  preview: {
    prepare() {
      return { title: 'About Page' };
    }
  }
});
