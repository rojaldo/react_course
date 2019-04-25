import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.baseURL = 'https://api.punkapi.com/v2/beers';

    }

    componentWillMount() {
        fetch(this.baseURL)
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
        const beers = this.state.data.map(
            (beer, i) => <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={i}>
                <div class="card">
                
                <div class="container-fluid text-center">
                <img class="card-img-top" src={beer.image_url} style={{width:'50px'}} alt="" />
                    
                </div>
                
                    <div class="card-body">
                        <h4 class="card-title">{beer.name}</h4>
                        <p class="card-text">{beer.description}</p>
                    </div>
                </div>

            </div>
        )

        return (

            <div className="container">
            
            <div class="row">
                {beers}
            </div>
            
            </div>
        );
    }
}

Beers.propTypes = {

};

export default Beers;