import React from 'react';
import PropTypes from 'prop-types';

// button
const LoginButton = (props) => pug`button(onClick=props.onClick) Login`

LoginButton.propTypes = {
  onClick: PropTypes.func,
}

const LogoutButton = (props) => pug`button(onClick=props.onClick) Logout`

LogoutButton.propTypes = {
  onClick: PropTypes.func,
}

// greeting
const UserGreeting = (props) => pug`h1 Welcome back`

const GuestGreeting = (props) => pug`h1 Please sign up`

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return pug`UserGreeting`
  }
  return pug`GuestGreeting`
}

Greeting.propTypes = {
  isLoggedIn: PropTypes.bool,
}

// control
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = pug`LogoutButton(onClick=this.handleLogoutClick)`
    } else {
      button = pug`LoginButton(onClick=this.handleLoginClick)`
    }

    return pug`
      div 
        Greeting(isLoggedIn=isLoggedIn)
        = button
    `

    // 同等
    
    // return (
    //   <div>
    //     <Greeting isLoggedIn={isLoggedIn} />
    //     {button}
    //   </div>
    // );
  }
}

export default LoginControl