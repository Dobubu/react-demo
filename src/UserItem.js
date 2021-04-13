import React from 'react'
import PropTypes from 'prop-types';

const UserItem = (props) => pug`
  div
    p #{ props.name }
      
    p pug ya aaaaa
`

UserItem.propTypes = {
  name: PropTypes.string,
}

export default UserItem