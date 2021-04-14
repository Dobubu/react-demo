import React from 'react'
import PropTypes from 'prop-types';

const UserItem = (props) => {
  const userList = props.userList;

  return pug`
    div
      p #{ props.name }
  
      if userList.length > 0
        div 
          h2 You have #{userList.length} unread messages.

      else
        p No any messages

      p pug ya aaaaa
  `

}

UserItem.propTypes = {
  name: PropTypes.string,
  userList: PropTypes.array
}

export default UserItem