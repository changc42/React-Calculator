import React, { Component } from 'react';
import '../CSS/screen.css'

class screen extends Component {

    // static defaultProps = {
    //     display: "default",
    // }

    brakeInTwo(str) {
            return <span><span>{str.splice(0, str.length-1)}</span> <span className={"gray"}>{str.splice(str.length-1)}</span></span>
        
    }

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
        <p className="mainD" >{this.brakeInTwo}</p>
            </div>
        );
    }
}

export default screen;