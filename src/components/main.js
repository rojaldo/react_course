import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calculator from './calculator';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ShowApod from './showapod';
import Apod from './apod';
import Beers from './beers';
import TypeAhead from './typeahead';


class Main extends Component {
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
        return (
            <div class="container">
                <Tabs defaultActiveKey="typeahead" id="uncontrolled-tab-example">
                    <Tab eventKey="calculator" title="Calculator">
                        <Calculator />
                    </Tab>
                    <Tab eventKey="apod" title="Apod">
                        <Apod></Apod>
                    </Tab>
                    <Tab eventKey="beers" title="Beers">
                        <Beers></Beers>
                    </Tab>
                    <Tab eventKey="typeahead" title="TypeAhead">
                        <TypeAhead></TypeAhead>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

Main.propTypes = {

};

export default Main;