import React from 'react';

import { Tree } from '.';
export const Node = ({ node, depth, children }) => {
  return (
    <div
      style={{ display: 'inline-flex', flexDirection: 'column' }}
      data-depth={[`${depth}`]}
      data-node={[`${node}`]}
    >
      <button>node: {node}</button>

      {children && (
        <div
          style={{ display: 'flex', flexDirection: 'column' }}
          data-parent={[`${node}`]}
        >
          <Tree data={children} depth={parseInt(depth) + 1} parent={node} />
        </div>
      )}
    </div>
  );
};
