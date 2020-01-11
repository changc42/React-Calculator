import React, { Component } from 'react';
import Screen from './screen'
import Board from  './board'
import '../CSS/calculator.css';

class calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <div>
                    <Screen />
                </div>
                
                <Board />
            </div>
        );
    }
}

export default calculator;