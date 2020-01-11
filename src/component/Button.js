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
    let className;
    let {content}=this.props;
    if(content=="=") className="EqualsSign";
    else if(!isNaN(content)) className = "Number";
    else className = "NaN";
    return (
<<<<<<< HEAD
      <div className={`Button ${className}`}>
=======
      <div className="Button" onClick={this.updateValue}>
>>>>>>> 9030f4c226b61f9a67a68cda8f79cc2c82c09e2a
          <p>{this.props.content}</p>
      </div>
    );
  }
}
