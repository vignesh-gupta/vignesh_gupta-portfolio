const experience = {
  name: 'Experience',
  title: 'Experiences',
  type: 'document',
  fields: [
    { name: 'role', title: 'Role', type: 'string' },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'duration',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default experience;
