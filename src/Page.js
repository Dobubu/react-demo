import React from 'react';
import PropTypes from 'prop-types';

// banner
const WarningBanner = (props) => {
  if (!props.warn) {
    return null;
  }

  return pug`.warning Warning!`
}

WarningBanner.propTypes = {
  warn: PropTypes.bool,
}

// Page
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return pug`
      div
        WarningBanner(warn=this.state.showWarning)
        button(
          onClick=this.handleToggleClick
        ) #{this.state.showWarning ? 'Hide' : 'Show'}
    `
  }
}

export default Page