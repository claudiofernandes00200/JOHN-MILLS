import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'address', title: 'Address', type: 'string' })
      ]
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'text', title: 'Text', type: 'text' })
          ]
        })
      ]
    }),
    defineField({
      name: 'tip',
      title: 'Tip',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'text', title: 'Text', type: 'text' })
      ]
    }),
    defineField({
      name: 'map',
      title: 'Map',
      type: 'object',
      fields: [
        defineField({ name: 'image', title: 'Image URL', type: 'string' }),
        defineField({ name: 'cardTitle', title: 'Card Title', type: 'string' }),
        defineField({ name: 'cardSubtitle', title: 'Card Subtitle', type: 'string' }),
        defineField({ name: 'link', title: 'Link', type: 'string' }),
        defineField({ name: 'linkLabel', title: 'Link Label', type: 'string' })
      ]
    })
  ],
  preview: {
    prepare() {
      return { title: 'Location Page' };
    }
  }
});
