import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'management',
  title: 'Management',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation:Rule=>Rule.required()
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'position',
      title: 'Position in company',
      type: 'string',
      validation:Rule=>Rule.required()
    }),
    defineField({
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'Links',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Linkedin',
                    value: 'linkedIn',
                  },
                  {
                    title: 'Twitter',
                    value: 'twitter',
                  },
                  {
                    title: 'Youtube',
                    value: 'youtube',
                  },
                  {
                    title: 'Facebook',
                    value: 'linkedIn',
                  },
                ],
              },
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().unique(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
