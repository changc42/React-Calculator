import React, { Component } from 'react';
import '../CSS/Button.css';

export default class Button extends Component {
    static defaultProps={
        content: "default",
    }
  render() {
    let className;
    let {content}=this.props;
    if(content=="=") className="EqualsSign";
    else if(!isNaN(content)) className = "Number";
    else className = "NaN";
    return (
      <div className={`Button ${className}`}>
          <p>{this.props.content}</p>
      </div>
    );
  }
}
