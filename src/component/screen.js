import React, { Component } from 'react';
import '../CSS/screen.css'

class screen extends Component {

    // static defaultProps = {
    //     value: "default",
    // }




    render() {

    
        

        


        // this.props.value.forEach(e => {
        //     output += e;
        // });
        // for(let i=0; i<this.props.value.length; i++){
        //     console.log(this.props.value)
        //     output += this.props.value[i]
        // }



        return (
            <div className="screen">
                <span className="value" >{ this.props.value }</span>
            </div>
        );
    }
}

export default screen;