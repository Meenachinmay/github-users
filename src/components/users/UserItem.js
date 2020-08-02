import React from 'react'

const UserItem = ({user}) => {
    
    const { login, avatar_url, html_url } = user;

    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
            <h3>{login}</h3>

            <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1" style={{ borderRadius: "5px" }}>More</a>
            </div>

        </div>
    )
}

export default UserItem
