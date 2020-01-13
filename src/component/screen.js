import React, { Component } from 'react';
import '../CSS/screen.css'

class screen extends Component {

    // static defaultProps = {
    //     display: "default",
    // }

    render() {
        // let output = ""
        // this.props.display.forEach(e => {
        //     output += e;
        // });
        
        // if(output.length > 1){
        //     output = output.slice(1, output.length)
        // }


        return (
            <div className="screen">
                {this.props.subD==""? <p className="blank">blank</p>:<p className="subD">{this.props.subD}</p>}
                <p className="mainD" >{this.props.mainD}</p>
            </div>
        );
    }
}

export default screen;