import React, { Component } from 'react';
import Screen from './screen'
import Board from  './board'
import '../CSS/calculator.css';

class calculator extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            value: "0",
         }
        this.updateScreenValue = this.updateScreenValue.bind(this)
    }

    // updates the state on the screen
    updateScreenValue(s) {
        console.log("calling updateScreenValue")
        // if(s === 'AC') {
        //     this.setState({ value: '0' })
        // }else if(s === '/' || s === '+' || s === '-' || s === 'x'){

        // }else {
            //this.state.value.push(s)
                console.log(this.state.value);
                this.setState(s => { return {value: `${s.value}${s}`}; }, ()=>console.log("finished pushing value to array"));
            
        // }
        
    }




    render() {
        return (
            <div className="calculator">
                <Screen value={this.state.value} />
                <Board updateScreenValue={this.updateScreenValue}/>
            </div>
        );
    }
}

export default calculator;