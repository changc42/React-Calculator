import React, { Component } from 'react';
import Screen from './screen'
import Board from  './board'

class calculator extends Component {
    render() {
        return (
            <div>
                <Screen />
                <Board />
            </div>
        );
    }
}

export default calculator;