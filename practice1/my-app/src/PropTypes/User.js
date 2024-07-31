import React from 'react'

import propTypes from 'prop-types'

const User = (props) => {
  return (
    <div>
        <h1>{props.userName}</h1>
        <h1>{props.userId}</h1>
    </div>
  )
}

User.propTypes = {
    userName : propTypes.string,
    userId: propTypes.number
};

User.defaultProps = {
    userName: "Default Name",
    userId: 0
};

export default User
