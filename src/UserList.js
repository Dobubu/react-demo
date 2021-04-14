import React from 'react'
import PropTypes from 'prop-types';

const UserItem = (props) => pug`li id-#{props.value.id} #{props.value.name}`

UserItem.propTypes = {
  value: PropTypes.object
}

const UserList = (props) => {
  const userList = props.userList;
  const listItems = userList.map((o, i) => pug`li(key=o.id) index-#{i} #{o.name}`);
  const userItems = userList.map((o, i) => pug`UserItem(key=o.id value=o)`);

  return pug`
    div
      ul #{listItems}

      ul #{userItems}
  
      if userList.length > 0
        div 
          h2 You have #{userList.length} unread messages.

      else
        p No any messages

      p pug ya aaaaa
  `

}

UserList.propTypes = {
  // name: PropTypes.string,
  userList: PropTypes.array
}

export default UserList