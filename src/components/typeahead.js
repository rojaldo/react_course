import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import 'react-bootstrap-typeahead/css/Typeahead.css';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOsm from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';


class TypeAhead extends Component {

    baseURL = 'https://restcountries.eu/rest/v2/all';

    constructor(props) {
        super(props);
        this.state = { options: [] };
        this.mapDivId = `map-${Math.random()}`;

        this.map = new OlMap({
            layers: [
                new OlLayerTile({
                    name: 'OSM',
                    source: new OlSourceOsm()
                })
            ],
            view: new OlView({
                center: fromLonLat([37.40570, 8.81566]),
                zoom: 4
            })
        });

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
        this.map.setTarget(this.mapDivId);

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
                <div
                    id={this.mapDivId}
                    style={{
                        height: '400px'
                    }}
                />
            </div>
        );
    }
}

TypeAhead.propTypes = {

};

export default TypeAhead;