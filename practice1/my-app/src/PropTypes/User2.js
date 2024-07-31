import React from 'react'

import propTypes from 'prop-types'


const User2 = (props) => {
    console.log(props.user);
    return (
        <div>
            <h1>{props.user.id}</h1>
            <h1>{props.user.name}</h1>
        </div>
    )
}

User2.propTypes = {
    //user: propTypes.object
    user: propTypes.shape({
        id: propTypes.number,
        name: propTypes.string
    })
};

export default User2
