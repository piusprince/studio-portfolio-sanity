import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    {
      title: 'Hero Section',
      name: 'heroSection',
    },
    {
      title: 'About Section',
      name: 'aboutSection',
    },
    {
      title: 'Contact Information',
      name: 'contact',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      group: 'heroSection',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'string',
        },
        {
          name: 'profileImage',
          title: 'Profile Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      group: 'aboutSection',
      fields: [
        {
          name: 'bio',
          title: 'Bio',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'skills',
          title: 'Skills',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    }),
    // defineField({
    //   name: 'featuredProjects',
    //   title: 'Featured Projects',
    //   type: 'array',
    //   of: [{type: 'reference', to: [{type: 'project'}]}],
    // }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      group: 'contact',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'platform', title: 'Platform', type: 'string'},
                {name: 'url', title: 'URL', type: 'url'},
              ],
            },
          ],
        },
      ],
    }),
  ],
  //   icon: HomeIcon
  preview: {
    select: {
      title: 'home.title',
    },
    prepare(selection) {
      return {
        title: 'Homepage',
      }
    },
  },
})
