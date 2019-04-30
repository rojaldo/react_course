import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrivialCard extends Component {
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

    componentWillUnmount() {

    }

    render() {
        const answers = this.props.card.answers.map((answer,i)=>
        <button type="button" className="btn btn-block btn-primary" key={i}>{answer}</button>
        );
        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-body">
                
                    <h4 className="card-title">{this.props.card.question}</h4>
                    {answers}

                </div>
            </div>
        </div>

        );
    }
}


export default TrivialCard;