import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowApod from './showapod';
import DatePicker from 'react-datepicker';

class Apod extends Component {
    constructor(props) {
        super(props);
        this.selectedDate = new Date();
        this.state = {selectedDate: new Date()};

    }

    handleChange(event){
        this.setState({selectedDate: event});
        this.selectedDate = event;
        console.log('Event: ' + event);

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
            <div className="container">
                <div className="container-fluid text-center">
                    <DatePicker
                        selected={this.selectedDate}
                        onChange={(e) => this.handleChange(e)}
                    />
                </div>
                <ShowApod date={this.selectedDate}></ShowApod>
            </div>
        );
    }
}

Apod.propTypes = {

};

export default Apod;