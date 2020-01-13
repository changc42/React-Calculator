import React, { Component } from 'react';
import Screen from './screen'
import Board from  './board'
import '../CSS/calculator.css';

class calculator extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            display: [0],
         }
        this.updateScreenDisplay = this.updateScreenDisplay.bind(this)
    }

    // updates the state on the screen
    updateScreenDisplay(s) {
        if(s === 'AC') {
            this.setState({ display: [0] })
        }else if(s === '/' || s === '+' || s === '-' || s === 'x' || s==='='){
            this.setState({ display: this.state.display })
        }else {
            this.setState({ display: this.state.display.concat(s) });
            
        }
        
    }

    render() {
        return (
            <div className="calculator">
                <Screen display={this.state.display} />
                <Board updateScreenDisplay={this.updateScreenDisplay}/>
            </div>
        );
    }
}
export default calculator;