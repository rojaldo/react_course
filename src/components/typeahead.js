import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import 'react-bootstrap-typeahead/css/Typeahead.css';

class TypeAhead extends Component {

    baseURL = 'https://restcountries.eu/rest/v2/all';

    constructor(props) {
        super(props);
        this.state = { options: [] };

    }

    processData(data) {
        let temp = [];
        data.forEach(country => {
            temp = [...temp, country.name]
        });
        this.setState({ options: temp });
    }

    componentWillMount() {
        fetch(this.baseURL)
            .then(response => response.json())
            .then(data => this.processData(data));
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
        return (
            <div>
                <Typeahead
                    id="myTypeAhead"
                    labelKey="name"
                    multiple="false"
                    options={this.state.options}
                    placeholder="Choose a state..."
                />
            </div>
        );
    }
}

TypeAhead.propTypes = {

};

export default TypeAhead;