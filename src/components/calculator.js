import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Display from './display';
import Keyboard from './keyboard';


class Calculator extends Component {

    INIT_STATE = 0;
    FIRST_FIGURE_STATE = 1;
    SECOND_FIGURE_STATE = 2;
    RESULT = 3;

    currentState = this.INIT_STATE;

    firstFigure = 0;
    secondFigure = 0;
    result = 0;
    operator = '';

    constructor(props) {
        super(props);
        this.state = {display: ''};
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    handleClick(value) {
        if(typeof value === 'number') {
            switch(this.currentState){
                case this.INIT_STATE:
                this.firstFigure = value;
                this.currentState = this.FIRST_FIGURE_STATE;
                break;
                case this.FIRST_FIGURE_STATE:
                this.firstFigure = this.firstFigure * 10 + value;
                break;
                case this.SECOND_FIGURE_STATE:
                this.secondFigure = this.secondFigure * 10 + value;
                break;
                case this.RESULT:
                this.firstFigure = value;
                this.secondFigure = 0;
                this.result = 0;
                this.operator = '';
                this.setState({display: this.firstFigure});
                this.currentState = this.FIRST_FIGURE_STATE;
                break;
            } 
            const temp = this.state.display + value;
            this.setState({display: temp} )
        }else if(typeof value === 'string') {
            switch(this.currentState){
                case this.INIT_STATE:
                break;
                case this.FIRST_FIGURE_STATE:
                if(value === '+' || value === '-' || value === '*' || value === '/'){
                    this.operator = value;
                    this.currentState = this.SECOND_FIGURE_STATE;
                    const temp = this.state.display + value;
                    this.setState({display: temp})
                }
                break;
                case this.SECOND_FIGURE_STATE:
                if(value === '=' && this.secondFigure > 0){
                    this.resolve();
                    const temp = this.state.display + value + this.result;
                    this.setState({display: temp})
                    this.currentState = this.RESULT;
                }
                break;
                case this.RESULT:
                break;
            } 

        }
        console.log('handleClick(): ' + value);
    }

    resolve(){
        switch(this.operator){
            case '+':
            this.result = this.firstFigure + this.secondFigure;
            break;
            case '-':
            this.result = this.firstFigure - this.secondFigure;
            break;
            case '*':
            this.result = this.firstFigure * this.secondFigure;
            break;
            case '/':
            this.result = this.firstFigure / this.secondFigure;
            break;
        }
    }

    render() {
        return (
            <div>
                <Display content={this.state.display}></Display>
                <Keyboard signal={(e)=>this.handleClick(e)}></Keyboard>
            </div>
        );
    }
}

Calculator.propTypes = {

};

export default Calculator;