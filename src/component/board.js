import React, { Component } from 'react';
import '../CSS/board.css';
import Button from './Button';

export default class componentName extends Component {
  static defaultProps={
    buttons: ["(",")","n/a","AC","7","8","9","/","4","5","6","x","1","2","3","-","0",".","=","+"],
  }
  render() {
    let output = [];
    for(let i=0; i<5; i++){
      output.push(
        <div className="row">
          {this.props.buttons.slice(i*4,i*4+4).map(e=>(
            <div className="col">
              <Button content={e}/>
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="board">
        {output}
      </div>
    );
  }
}
