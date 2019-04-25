import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";
import YouTube from 'react-youtube';


class ShowApod extends Component {
    baseURL = '';
    apiKey = 'NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo'
    constructor(props) {
        super(props);
        this.state = { data: {}, selectedDate: new Date() };
        this.baseURL = 'https://api.nasa.gov/planetary/apod?api_key=' + this.apiKey;

    }

    componentWillMount() {
        fetch(this.baseURL)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        let myDate = new Date();
        if(this.props.date === undefined) {
        }else {
            myDate = this.props.date;
        }
        const myURL = this.baseURL 
        + '&date=' + myDate.toISOString().split('T')[0];
        console.log(myURL);
        console.log('URL: ' + myURL);
        fetch(myURL).then(response => response.json())
        .then(data => this.setState({data: data}));
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

    youtube_parser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    render() {
        let youtubeID = '';
        let visualizator = <div className={'text-center'}></div>;
        if(this.state.data.media_type === 'image'){
            visualizator = <img src={this.state.data.url} style={{ width: '100%' }} alt="Image"></img>
        } else if(this.state.data.media_type === 'video'){
            youtubeID = this.youtube_parser(this.state.data.url);
            console.log(youtubeID);
            visualizator = <YouTube
            videoId={youtubeID}                  // defaults -> null
          />
        }

        return (

            <div className="container">

                <div className="jumbotron">
                    <div className="container">
                        <h2>{this.state.data.title}</h2>
                        
                        <div className="container-fluid text-center">
                        {visualizator}                            
                        </div>
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