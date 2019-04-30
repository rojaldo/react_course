import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../model/card';
import TrivialCard from './trivialcard';

class Trivial extends Component {

    baseURL = 'https://opentdb.com/api.php?amount=10';

    constructor(props) {
        super(props);
        this.state = { data: {}, cards: [] };
    }

    componentWillMount() {
        fetch(this.baseURL)
            .then(response => response.json())
            .then(data => this.processResult(data))
    }

    processResult(data) {
        let cardArray = this.state.cards;
        data.results.forEach(element => {
            const myCard = new Card(element);    
            cardArray = [...cardArray, myCard];
        });
        
        this.setState({ data: data, cards: cardArray });
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

        const cards = this.state.cards.map((card, i) =>
        <TrivialCard card={card} key={i}></TrivialCard>
        )
        return (

            <div class="container">

                <div class="row">
                    {cards}
                </div>

            </div>

        );
    }
}

Trivial.propTypes = {

};

export default Trivial;