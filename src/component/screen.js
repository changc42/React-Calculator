import React, { Component } from 'react';
import '../CSS/screen.css'

class screen extends Component {

    // static defaultProps = {
    //     value: "default",
    // }




    render() {
        console.log("rendering screen")

    

        let output = "";
        console.log(this.props.value);
        this.props.value.forEach(e => {
            output += e;
        });

        return (
            <div className="screen">
                <span className="value" >{ output }</span>
            </div>
        );
    }
}

export default screen;