import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Keyboard extends Component {
    constructor(props) {
        super(props);

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

    handleClick(value){
        console.log(value);
        this.props.signal(value);

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td><button onClick={() => this.handleClick(7)}>7</button></td>
                        <td><button onClick={() => this.handleClick(8)}>8</button></td>
                        <td><button onClick={() => this.handleClick(9)}>9</button></td>
                        <td><button onClick={() => this.handleClick('/')}>/</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => this.handleClick(4)}>4</button></td>
                        <td><button onClick={() => this.handleClick(5)}>5</button></td>
                        <td><button onClick={() => this.handleClick(6)}>6</button></td>
                        <td><button onClick={() => this.handleClick('*')}>*</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => this.handleClick(1)}>1</button></td>
                        <td><button onClick={() => this.handleClick(2)}>2</button></td>
                        <td><button onClick={() => this.handleClick(3)}>3</button></td>
                        <td><button onClick={() => this.handleClick('-')}>-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => this.handleClick('.')}>.</button></td>
                        <td><button onClick={() => this.handleClick(0)}>0</button></td>
                        <td><button onClick={() => this.handleClick('=')}>=</button></td>
                        <td><button onClick={() => this.handleClick('+')}>+</button></td>
                    </tr>
                </table>
            </div>
        );
    }
}

Keyboard.propTypes = {

};

export default Keyboard