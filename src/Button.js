import PropTypes from 'prop-types';

const Button = ({ handleClick, text }) => pug`button(onClick=handleClick) #{ text }`

Button.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string,
}

export default Button