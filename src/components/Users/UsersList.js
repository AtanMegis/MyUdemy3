import React from 'react';
import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = ({ users }) => {
  return (
    <Card cssClass={styles.users}>
      <ul>
        {users.map((data) => (
          <li
            key={data.id}>
            {data.name}
            ({data.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;