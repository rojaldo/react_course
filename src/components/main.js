import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calculator from './calculator';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ShowApod from './showapod';
import Apod from './apod';
import Beers from './beers';
import TypeAhead from './typeahead';
import Trivial from './trivial';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
            <div>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/calculator">Calculator</Link>
                                </li>
                                <li>
                                    <Link to="/beers/">Beers</Link>
                                </li>
                                <li>
                                    <Link to="/apod/">Apod</Link>
                                </li>
                                <li>
                                    <Link to="/typeahead/">Type Ahead</Link>
                                </li>
                                <li>
                                    <Link to="/trivial/">Trivial</Link>
                                </li>
                            </ul>
                        </nav>

                        <Route path="/calculator" exact component={Calculator} />
                        <Route path="/beers/" component={Beers} />
                        <Route path="/apod/" component={Apod} />
                        <Route path="/typeahead/" component={TypeAhead} />
                        <Route path="/trivial/" component={Trivial} />
                    </div>
                </Router>
            </div>
        );
    }
}

Main.propTypes = {

};

export default Main;