import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'services',
  title: 'Services',
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
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'id', title: 'ID', type: 'number' }),
            defineField({
              name: 'iconName',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Wrench', value: 'wrench' },
                  { title: 'Check Square', value: 'checksquare' },
                  { title: 'Monitor', value: 'monitor' },
                  { title: 'Disc', value: 'disc' },
                  { title: 'Wind', value: 'wind' },
                  { title: 'Zap', value: 'zap' },
                  { title: 'Activity', value: 'activity' },
                  { title: 'Ruler', value: 'ruler' },
                  { title: 'Alert Triangle', value: 'alerttriangle' },
                  { title: 'Car', value: 'car' },
                  { title: 'Layers', value: 'layers' }
                ]
              }
            }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' })
          ]
        })
      ]
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'body', title: 'Body', type: 'text' }),
        defineField({
          name: 'bullets',
          title: 'Bullets',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })]
        }),
        defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
        defineField({ name: 'ctaPhone', title: 'CTA Phone', type: 'string' })
      ]
    })
  ],
  preview: {
    prepare() {
      return { title: 'Services Page' };
    }
  }
});
