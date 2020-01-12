import React, { Component } from 'react';
import '../CSS/screen.css'

class screen extends Component {

    // static defaultProps = {
    //     value: "default",
    // }




    render() {
        console.log("rendering screen")

    
<<<<<<< HEAD

        let output = "";
        console.log(this.props.value);
        this.props.value.forEach(e => {
            output += e;
        });
=======
        

        


        // this.props.value.forEach(e => {
        //     output += e;
        // });
        // for(let i=0; i<this.props.value.length; i++){
        //     console.log(this.props.value)
        //     output += this.props.value[i]
        // }


>>>>>>> 1343a731042c3112042a7e391f7770f574dfba81

        return (
            <div className="screen">
                <span className="value" >{ this.props.value }</span>
            </div>
        );
    }
}

export default screen;