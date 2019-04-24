import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calculator from './calculator';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ShowApod from './showapod';


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
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Calculator">
                        <Calculator />
                    </Tab>
                    <Tab eventKey="profile" title="Apod">
                        <ShowApod></ShowApod>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

Main.propTypes = {

};

export default Main;