import React, { useEffect, useState } from 'react';
import { List } from './List';
import { ListItem } from './ListItem';

export const ListExample = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const DATA = [
      {
        id: 1,
        first_name: 'Tansy',
        last_name: 'Trynor',
        email: 'ttrynor0@cpanel.net',
      },
      {
        id: 2,
        first_name: 'Natasha',
        last_name: 'Charer',
        email: 'ncharer1@theatlantic.com',
      },
      {
        id: 3,
        first_name: 'Dareen',
        last_name: 'Martinson',
        email: 'dmartinson2@creativecommons.org',
      },
    ];
    setData(DATA);
  }, []);

  return (
    <>
      {data && (
        <List>
          {data.map(({ id, first_name, last_name, email }, index) => {
            return (
              <ListItem
                key={id}
                data={{
                  index,
                  firstname: first_name,
                  lastname: last_name,
                  email,
                }}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
