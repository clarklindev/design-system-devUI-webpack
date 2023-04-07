import React from 'react';

import { Tree } from './index';

export const TreeExample = () => {
  const data = [
    {
      item: 'Percy',
      link: '',
      children: [
        { item: 'Jack', link: '' },
        { item: 'Ben', link: '' },
        {
          item: 'John',
          link: '',
          children: [
            { item: 'Alex', link: '' },
            { item: 'Sam', link: '', children: [{ item: 'Pam', link: '' }] },
          ],
        },
        {
          item: 'Beth',
          link: '',
          children: [{ item: 'Ned', link: '' }],
        },
      ],
    },
  ];

  // requires data to be structured with "item" and "children" properties
  return <Tree data={data} />;
};
