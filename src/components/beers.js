import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import {Typeahead} from 'react-bootstrap-typeahead'; // ES2015
class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: {
                min: 3,
                max: 7,
            },
            selectedBeers: []
        };
        this.baseURL = 'https://api.punkapi.com/v2/beers';

    }

    componentWillMount() {
        fetch(this.baseURL)
            .then(response => response.json())
            .then(data => this.setState({ data: data, selectedBeers: data }))
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

    handleRange(value) {
        console.log(value);
        const result = this.state.data.filter(beer => beer.abv >= this.state.value.min && beer.abv <= this.state.value.max);
        this.setState({selectedBeers: result});
    }

    render() {
        const beers = this.state.selectedBeers.map(
            (beer, i) => <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={i}>
                <div className="card">

                    <div className="container-fluid text-center">
                        <img className="card-img-top" src={beer.image_url} style={{ width: '50px' }} alt="" />

                    </div>

                    <div className="card-body">
                        <h4 className="card-title">{beer.name}</h4>
                        <p className="card-text">{beer.description}</p>
                    </div>
                </div>

            </div>
        )

        return (

            <div className="container m-2">


                <div className="container-fluid m-4">
                    <InputRange
                        maxValue={80}
                        minValue={0}
                        onChange={myValue => this.setState({ value: myValue })}
                        onChangeComplete={value => this.handleRange(value)}
                        value={this.state.value} />

                </div>

                <div className="row">
                    {beers}
                </div>

            </div>
        );
    }
}

Beers.propTypes = {

};

export default Beers;