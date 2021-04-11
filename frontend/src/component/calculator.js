import React, { Component } from 'react';
import Screen from './screen'
import Board from  './board'
import '../CSS/calculator.css';
import evaluate from '../functions/evaluate';

class calculator extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            mainD: "0", //mainD = main display
            subD: "", //subDisplay
            prevClick: "n",//prevClick can have one of three values: n(number), o(operation), or e(equals)
            prent: "",
            gray: false
         }
        this.updateScreenDisplay = this.updateScreenDisplay.bind(this)
    }

    // updates the state on the screen
    updateScreenDisplay(s) {
        let {mainD, subD, prevClick, gray} = this.state;
        if(s === 'AC') {
            this.setState({
                mainD: "0",
                subD: "",
                prevClick: "n",
            });
        }
        else if(prevClick === "n" && !gray){
            if(!isNaN(s)){
                if(mainD=="0") this.setState({ mainD: s, prevClick: "n" });
                else this.setState({ mainD: mainD+s, prevClick: "n" });
            }
            else if(s === '/' || s === '+' || s === '-' || s === 'x' && !gray){
                this.setState({
                    prevClick: "o",
                    mainD: mainD+s,
                });
            }else if(s === "="){
                let result = evaluate(mainD);
                 console.log(result)
                // do what the doc says 
                this.setState({
                    prevClick: "e",
                    subD: mainD+s,
                    mainD: result
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
        else if(prevClick==="o" && !gray){
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
                let result = evaluate(s);
                this.setState({
                    prevClick: "e",
                    subD: mainD.substring(0,mainD.length-1)+s,
                    mainD: result
                })
            }else if(s === "(" ) {
                this.setState({
                    prevClick: "open",
                    mainD: mainD+s+")"
                })
            }else if(s === ")"){
                let lastChar = s.slice(s.length-2);
                if(lastChar !== '/' || lastChar !== '+' || lastChar !== '-' || lastChar !== 'x') {
                    this.setState({
                        mainD: mainD
                    })
                }
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
        else if(prevClick === "open" || gray) {
            let currVal = mainD.slice(0, mainD.length-1);
            if(!isNaN(s)) {
                this.setState({
                    mainD: currVal + s + ")",
                    prevClick: "n",
                    gray: true
                })
            } else if(s === '/' || s === '+' || s === '-' || s === 'x') {
                this.setState({
                    mainD: currVal +  s + ")",
                    gray: true,
                    prevClick: "o"
                })
            }  else if(s === "e") {
                let result = evaluate(s);
                this.setState({
                    mainD: result
                })
            } else if(s === "(") {
                this.setState({
                    mainD: mainD,
                    open: "open",
                    gray: true
                })
            }else if(s === ")"){
                let lastChar1 = mainD.slice(mainD.length-2);
                let lastChar = lastChar1.slice(0, lastChar1.length-1)
                console.log(lastChar)
                if(lastChar === '/' || lastChar === '+' || lastChar === '-' || lastChar === 'x') {
                    this.setState({
                        mainD: currVal + ")",
                        open: "open"
                    })
                }else {
                    this.setState({
                        mainD: currVal + s,
                        gray: false,
                        prevClick: "close"
                    })
                }
            }
        } // if of open
        else if(prevClick === 'close') {
            if(!isNaN(s)) {
                this.setState({
                    mainD: mainD + s,
                    prevClick: "n",
                    gray: false
                })
            } else if(s === '/' || s === '+' || s === '-' || s === 'x') {
                this.setState({
                    mainD: mainD + s,
                    gray: false,
                    prevClick: "o"
                })
            }  else if(s === "=") {
                let result = evaluate(mainD);
                this.setState({
                    mainD: result,
                    gray: false
                })
            } else if(s === "(") {
                this.setState({
                    mainD: mainD + "()",
                    open: "open",
                    gray: true
                })
            }

        } // end of close
        
    }

    render() {
        return (
            <div className="calculator">
                <Screen gray={this.state.gray} prevClick={this.state.prevClick} mainD={this.state.mainD} subD={this.state.subD} />
                <Board updateScreenDisplay={this.updateScreenDisplay}/>
            </div>
        );
    }
}
export default calculator;