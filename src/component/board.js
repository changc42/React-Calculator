import React, { Component } from 'react';
import '../CSS/board.css';

export default class componentName extends Component {
  render() {
    return (
      <div> 
        <table className="board">
          <tr>
            <td>(</td>
            <td>)</td>
            <td>n/a</td>
            <td>AC</td>
          </tr>
          <tr>
            <td className="number">7</td>
            <td className="number">8</td>
            <td className="number">9</td>
            <td>/</td>
          </tr>
          <tr>
            <td className="number">4</td>
            <td className="number">5</td>
            <td className="number">6</td>
            <td>x</td>
          </tr>
          <tr>
            <td className="number">1</td>
            <td className="number">2</td>
            <td className="number">3</td>
            <td>-</td>
          </tr>
          <tr>
            <td className="number">0</td>
            <td>.</td>
            <td>=</td>
            <td>+</td>
          </tr>
        </table>
      </div>
    );
  }
}
