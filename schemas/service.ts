import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      title: 'WeAreUsing',
      name: 'weAreUsing',
      description: 'give minimum 6 items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'iconName',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'iconImage',
              title: 'Image',
              type: 'image',
            },
          ],
        },
      ],
    }),
    defineField({
      title: 'Core Services',
      name: 'services',
      description: 'give minimum 4 items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'services',
          title: 'Core Services',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
          ],
        },
      ],
    }),
    defineField({
      title: 'Procedure',
      name: 'procedure',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'Ste',
          fields: [
            {
              name: 'step',
              title: 'Step',
              type: 'number',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
