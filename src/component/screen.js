import React, { Component } from 'react';
import '../CSS/screen.css'

class screen extends Component {

    // static defaultProps = {
    //     value: "default",
    // }




    render() {
        console.log("rendering screen")

    
        

        

        let output = ""
        this.props.value.forEach(e => {
            output += e;
        });
        
        if(output.length > 1){
            output = output.slice(1, output.length)
        }


        return (
            <div className="screen">
                <span className="value" >{ output }</span>
            </div>
        );
    }
}

export default screen;