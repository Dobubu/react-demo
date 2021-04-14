import PropTypes from 'prop-types';

const Display = ({ counter }) => pug`div #{ counter }`

Display.propTypes = {
  counter: PropTypes.number,
}

export default Display