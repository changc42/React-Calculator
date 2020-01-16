import React, { Component } from 'react';
import '../CSS/Button.css';

export default class Button extends Component {

    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this)
    }

    static defaultProps={
        content: "default",
    }

    // this grabs the value from user click and passes it up to screen
    handleClick() {
      this.props.updateScreenValue(this.props.content)
    }


  render() {
    let className;
    let {content}=this.props;
    if(content==="=") className="EqualsSign";
    else if(!isNaN(content)) className = "Number";
    else className = "NaN";
    return (
      
      <div className={`Button ${className}`} onClick={this.handleClick}>
          <p>{this.props.content}</p>
      </div>
    );
  }
}
