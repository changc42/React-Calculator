import React, { Component } from 'react';
import '../CSS/screen.css'

class screen extends Component {


    brakeInTwo(str) {
        return <span><span>{str.slice(0, str.length-1)}</span> <span className={"gray"}>{str.slice(str.length-1)}</span></span>
    }


    render() {
        

        console.log(this.brakeInTwo(JSON.stringify(this.props.mainD)))


        return (
            <div className="screen">
                {this.props.subD===""? <p className="blank">blank</p>:<p className="subD">{this.props.subD}</p>}
        <p className="mainD" >{this.props.gray ? this.brakeInTwo(this.props.mainD) : this.props.mainD}</p>
            </div>
        );
    }
}

export default screen;