import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialMedia',
  title: 'Social Media',
  type: 'document',
  fields: [
    defineField({
      name: 'facebookUrl',
      title: 'FaceBook Url',
      type: 'url',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'Youtube Url',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram Url',
      type: 'url',
    }),
    defineField({
      name: 'xUrl',
      title: 'x/Twitter Url',
      type: 'url',
    }),
    defineField({
      name: 'linkedUrl',
      title: 'LinkedIn Url',
      type: 'url',
    }),
    defineField({
      name: 'pinterestUrl',
      title: 'Pinterest Url',
      type: 'url',
    }),
   
  ],
})
