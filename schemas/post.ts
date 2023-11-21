import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Social Media',
      type: 'string',
      options:{
        list:[
            {title:"Facebook", value:"facebook"},
            {title:"Instagram", value:"instagram"},
            {title:"LinkedIn", value:"linkedIn"},
            {title:"Twitter", value:"twitter"},
        ]
      }
    }),
    defineField({
      name: 'link',
      title: 'Post Link',
      type: 'url',
    }),
    defineField({
      name: 'socialId',
      title: 'Social Id',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
})
