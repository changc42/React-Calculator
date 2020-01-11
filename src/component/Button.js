import React, { Component } from 'react';
import '../CSS/Button.css';

export default class Button extends Component {

    constructor(props) {
      super(props);
      this.updateValue = this.updateValue.bind(this)
    }

    static defaultProps={
        content: "default",
    }

    // this grabs the value from user click and passes it up to screen
    updateValue() {
      this.props.updateScreenValue(this.props.content)
    }


  render() {
    return (
      <div className="Button" onClick={this.updateValue}>
          <p>{this.props.content}</p>
      </div>
    );
  }
}
