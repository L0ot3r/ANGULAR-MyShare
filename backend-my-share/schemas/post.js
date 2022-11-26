export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
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
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
    {
      name: 'snaps',
      title: 'Snaps',
      type: 'number',
    },
  ],
}