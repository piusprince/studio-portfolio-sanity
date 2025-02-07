import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Project Summary',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'tech', title: 'Technology', type: 'string'},
            {name: 'icon', title: 'Icon', type: 'image'},
          ],
        },
      ],
    }),
    defineField({
      name: 'projectLinks',
      title: 'Project Links',
      type: 'object',
      fields: [
        {name: 'github', title: 'GitHub', type: 'url'},
        {name: 'live', title: 'Live Site', type: 'url'},
        {name: 'demo', title: 'Demo Video', type: 'url'},
      ],
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'imageOnRight',
      title: 'Image on Right',
      type: 'boolean',
      description: 'Display the project image on the right side of the content',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
    },
  },
})
