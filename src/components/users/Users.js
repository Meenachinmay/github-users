import React, { useState } from 'react'

import UserItem from './UserItem';

const Users = () => {
   
    const [users, setUsers] = useState([
        {
            id: "1",
            login: "mojombo",
            avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/mojombo'
        },
        {
            id: "2",
            login: "mojombo",
            avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/mojombo'
        },
        {
            id: "3",
            login: "mojombo",
            avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/mojombo'
        }
    ]);

    return (
        <div style={userStyle}>
            {
                users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))
            }         
        </div>
    )
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;
