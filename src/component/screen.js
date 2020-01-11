import React, { Component } from 'react';
import '../CSS/screen.css'

class screen extends Component {

    static defaultProps = {
        value: "default",
    }

    render() {
        return (
            <div className="screen">
                <span className="value" >{this.props.value}</span>
            </div>
        );
    }
}

export default screen;