import React from 'react';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return pug`
      form(onSubmit=this.handleSubmit)
        label Pick your favorite flavor:
          select(
            value=this.state.value
            onChange=this.handleChange
          )
            option(value="grapefruit") grapefruit

            option(value="lime") lime

            option(value="coconut") coconut

            option(value="mango") mango

        input(type="submit" value="Submit")
        span #{this.state.value}
    `
  }
}

export default FlavorForm