import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowApod extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {} };

    }

    componentWillMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
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
                <div className="jumbotron">
                    <div className="container">
                        <h2>{this.state.data.title}</h2>
                        
                        <img src={this.state.data.url} style={{width: '100%'}} alt="Image"></img>
                        
                        <p>{this.state.data.explanation}</p>
                        <p>
                            <a className="btn btn-primary btn-lg" href={this.state.data.hdurl}>Download</a>
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

ShowApod.propTypes = {

};

export default ShowApod;