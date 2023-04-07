import React from 'react';

import { Node } from './Node';

// recursive function - destruct off props
export const Tree = ({ data, depth = 0 }) => {
  return data.map((each, index) => {
    return (
      <Node
        key={`depth_${depth}_index_${index}`}
        node={each.item}
        children={each.children}
        depth={parseInt(depth)}
      />
    );
  });
};
