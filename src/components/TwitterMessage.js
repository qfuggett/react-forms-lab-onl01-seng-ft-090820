import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  changeInput = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        value={this.state.value}
        onChange={this.changeInput}
        />
        <p>You have {this.props.maxChars - this.state.value.length} characters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
