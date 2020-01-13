import React, { Component } from 'react';
import Screen from './screen'
import Board from  './board'
import '../CSS/calculator.css';

class calculator extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            mainD: "0", //mainD = main display
            subD: "", //subDisplay
            prevClick: "n",//prevClick can have one of three values: n(number), o(operation), or e(equals)
         }
        this.updateScreenDisplay = this.updateScreenDisplay.bind(this)
    }

    // updates the state on the screen
    updateScreenDisplay(s) {
        let {mainD, subD, prevClick} = this.state;
        if(s === 'AC') {
            this.setState({
                mainD: "0",
                subD: "",
                prevClick: "n",
            });
        }
        else if(prevClick=="n"){
            if(!isNaN(s)){
                if(mainD=="0") this.setState({mainD: s});
                else this.setState({ mainD: mainD+s });
            }
            else if(s === '/' || s === '+' || s === '-' || s === 'x'){
                this.setState({
                    prevClick: "o",
                    mainD: mainD+s,
                });
            }else {
                this.setState({
                    prevClick: "e",
                    subD: mainD+s,
                    mainD: "696969",
                })
            }
        }
        else if(prevClick=="o"){
            if(!isNaN(s)){
                this.setState({
                    prevClick:"n",
                    mainD: mainD+s,
                })
            }
            else if(s === '/' || s === '+' || s === '-' || s === 'x'){
                this.setState({
                    prevClick:"o",
                    mainD: mainD.substring(0,mainD.length-1)+s,
                })
            }else {
                this.setState({
                    prevClick: "e",
                    subD: mainD.substring(0,mainD.length-1)+s,
                    mainD: "696969",
                })
            }
        }
        else{
            if(!isNaN(s)){
                this.setState({
                    prevClick:"n",
                    subD: "Ans="+mainD,
                    mainD: s,
                })
            }
            else if(s === '/' || s === '+' || s === '-' || s === 'x'){
                this.setState({
                    prevClick: "o",
                    subD: "",
                    mainD: mainD+s,
                })
            }else {
                console.log("equals sign pressed repetitively");
            }
        }
        
    }

    render() {
        return (
            <div className="calculator">
                <Screen mainD={this.state.mainD} subD={this.state.subD} />
                <Board updateScreenDisplay={this.updateScreenDisplay}/>
            </div>
        );
    }
}
export default calculator;