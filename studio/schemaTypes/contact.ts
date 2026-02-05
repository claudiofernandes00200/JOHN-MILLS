import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text' }),
        defineField({ name: 'image', title: 'Image URL', type: 'string' })
      ]
    }),
    defineField({
      name: 'info',
      title: 'Info',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'addressTitle', title: 'Address Title', type: 'string' }),
        defineField({
          name: 'addressLines',
          title: 'Address Lines',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })]
        }),
        defineField({ name: 'phoneTitle', title: 'Phone Title', type: 'string' }),
        defineField({ name: 'phoneOffice', title: 'Phone Office', type: 'string' }),
        defineField({ name: 'phoneMobile', title: 'Phone Mobile', type: 'string' }),
        defineField({ name: 'emailTitle', title: 'Email Title', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'hoursTitle', title: 'Hours Title', type: 'string' }),
        defineField({
          name: 'hoursLines',
          title: 'Hours Lines',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })]
        }),
        defineField({ name: 'socialLabel', title: 'Social Label', type: 'string' }),
        defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'string' })
      ]
    }),
    defineField({
      name: 'form',
      title: 'Form',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text' }),
        defineField({ name: 'nameLabel', title: 'Name Label', type: 'string' }),
        defineField({ name: 'namePlaceholder', title: 'Name Placeholder', type: 'string' }),
        defineField({ name: 'phoneLabel', title: 'Phone Label', type: 'string' }),
        defineField({ name: 'phonePlaceholder', title: 'Phone Placeholder', type: 'string' }),
        defineField({ name: 'subjectLabel', title: 'Subject Label', type: 'string' }),
        defineField({
          name: 'subjectOptions',
          title: 'Subject Options',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })]
        }),
        defineField({ name: 'messageLabel', title: 'Message Label', type: 'string' }),
        defineField({ name: 'messagePlaceholder', title: 'Message Placeholder', type: 'string' }),
        defineField({ name: 'submitLabel', title: 'Submit Label', type: 'string' })
      ]
    })
  ],
  preview: {
    prepare() {
      return { title: 'Contact Page' };
    }
  }
});
