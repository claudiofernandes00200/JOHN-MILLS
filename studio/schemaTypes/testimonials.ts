import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text' })
      ]
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'id', title: 'ID', type: 'number' }),
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'role', title: 'Role', type: 'string' }),
            defineField({ name: 'location', title: 'Location', type: 'string' }),
            defineField({ name: 'content', title: 'Content', type: 'text' })
          ]
        })
      ]
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        defineField({ name: 'text', title: 'Text', type: 'text' }),
        defineField({ name: 'buttonLabel', title: 'Button Label', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' })
      ]
    })
  ],
  preview: {
    prepare() {
      return { title: 'Testimonials Page' };
    }
  }
});
