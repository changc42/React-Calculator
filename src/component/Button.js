import React, { Component } from 'react';
import '../CSS/Button.css';

export default class Button extends Component {
    static defaultProps={
        content: "default",
    }
  render() {
    return (
      <div className="Button">
          <p>{this.props.content}</p>
      </div>
    );
  }
}
