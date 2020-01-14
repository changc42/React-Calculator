import React, { Component } from 'react';
import Screen from './screen'
import Board from  './board'
import '../CSS/calculator.css';
import evalToCloseOrEnd from '../functions/evalToCloseOrEnd';

class calculator extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            mainD: "0", //mainD = main display
            subD: "", //subDisplay
            prevClick: "n",//prevClick can have one of three values: n(number), o(operation), or e(equals)
            prent: ""
         }
        this.updateScreenDisplay = this.updateScreenDisplay.bind(this)
        this.evaluate=this.evaluate.bind(this)
    }

    function evaluate(s){
        let number=null;
        let pow=0;
        let arr =[];
        while(s.length!=0){
            let c = s.charAt(s.length-1);
            s = s.slice(0,s.length-1);
            if(!isNaN(c)){
                if(number==null) number=0;
                number += c*Math.pow(10,pow);
                pow++;
            }
            else if(c=="+" || c=="-" || c=="/" || c=="x" || c==")"){
                if(c=="-" && (s.length==0 || s.charAt(s.length-1)=="(") ){ //check if "-" acts as negative or subtract
                    if(number==null) arr[0] = arr[0]*(-1);
                    else number *= -1;
                }
                else{
                    if(number!=null){
                        arr.unshift(number.toString());
                        number=null;
                        pow=0;
                    }
                    arr.unshift(c);
                }
            }
            else if(c=="("){
                if(number!=null){
                    arr.unshift(number.toString());
                    number=null;
                    pow=0;
                }
                evalToCloseOrEnd(arr);
            }
        }
        if(number!=null) arr.unshift(number.toString());
        evalToCloseOrEnd(arr);
        
        return arr[0].toString();
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
                if(mainD=="0") this.setState({ mainD: s, prevClick: "n" });
                else this.setState({ mainD: mainD+s, prevClick: "n" });
            }
            else if(s === '/' || s === '+' || s === '-' || s === 'x'){
                this.setState({
                    prevClick: "o",
                    mainD: mainD+s,
                });
            }else if(s === "="){
                // do what the doc says 
                this.setState({
                    prevClick: "e",
                    subD: mainD+s,
                    mainD: "696969",
                })
            }else if(s == "(") {
                if(mainD === "0"){
                    this.setState({
                        prevClick: "open",
                        mainD: s+")"
                    })
                }else{
                    this.setState({
                        prevClick: "open",
                        mainD: mainD+s+")"
                    })
                }
            }else if(s == "(") {
                this.setState({
                    mainD: mainD
                })
            }
        } // end of "n"
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
            }else if(s === "=") {
                this.setState({
                    prevClick: "e",
                    subD: mainD.substring(0,mainD.length-1)+s,
                    mainD: "696969",
                })
            }else if(s === "(" ) {
                this.setState({
                    prevClick: "open",
                    mainD: mainD+s+")"
                })
            }else if(s === ")"){
                this.setState({
                    mainD: mainD
                })
            }
        }  // end of "o" else if
        else if(prevClick === "e"){
            if(!isNaN(s)){
                this.setState({
                    prevClick:"n",
                    subD: "Ans="+ mainD,
                    mainD: s,
                })
            }
            else if(s === '/' || s === '+' || s === '-' || s === 'x'){
                this.setState({
                    prevClick: "o",
                    subD: "",
                    mainD: mainD+s,
                })
            }else if(s === "("){
                 
                this.setState({
                    mainD: mainD + "()",
                    prevClick: "open"
                })
            }else if(s === ")"){
                this.setState({
                    mainD: mainD
                })
            }else {
                console.log("equals sign pressed repetitively");
            }
        } // end of if else for "e"
        else if(prevClick === "open") {
            if(!isNaN(s)) {
                let currVal = mainD.slice(0, mainD.length-1);
                this.setState({
                    mainD: currVal + s + ")",
                    prevClick: "n"
                })
            }
        }
        
    }

    render() {
        return (
            <div className="calculator">
                <Screen prevClick={this.state.prevClick} mainD={this.state.mainD} subD={this.state.subD} />
                <Board updateScreenDisplay={this.updateScreenDisplay}/>
            </div>
        );
    }
}
export default calculator;