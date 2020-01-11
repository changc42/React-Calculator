import React, { Component } from 'react';
import Screen from './screen'
import Board from  './board'
import '../CSS/calculator.css';

class calculator extends Component {
    
    constructor(props) {
        super(props);
        this.state = { value: '0' }
        this.updateScreenValue = this.updateScreenValue.bind(this)
    }

    // updates the state on the screen
    updateScreenValue(s) {
        this.setState({ value: s });
    }

    render() {
        return (
            <div className="calculator">
<<<<<<< HEAD
                <div>
                    <Screen />
                </div>
                
                <Board />
=======
                <Screen value={this.state.value} />
                <Board updateScreenValue={this.updateScreenValue}/>
>>>>>>> 9030f4c226b61f9a67a68cda8f79cc2c82c09e2a
            </div>
        );
    }
}

export default calculator;