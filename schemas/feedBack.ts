import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feedback',
  title: 'FeedBack',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientPosition',
      title: 'ClientPosition',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
        accept: 'image/png, image/jpeg',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Rating',
      name: 'rating',
      description: 'give minimum 1 star',
      type: 'number',
      options: {
        list: [
          {
            title: '1',
            value: 1,
          },
          {
            title: '2',
            value: 2,
          },
          {
            title: '3',
            value: 3,
          },
          {
            title: '4',
            value: 4,
          },
          {
            title: '5',
            value: 5,
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
