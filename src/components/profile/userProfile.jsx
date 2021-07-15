import React from 'react'
import './userProfile.css'
import PropTypes from 'prop-types';

function UserProfile({username, image}){
    return(
        <div className="padre-profile">
            <div className="rounded-image">
                <img src={image} />
            </div>
            <p>{username}</p>
        </div>
    )
}

UserProfile.defaultProps = {
    username: 'UserName',
    image: 'https://avatars0.githubusercontent.com/u/12098?v=3&s=460'
}
export default UserProfile;