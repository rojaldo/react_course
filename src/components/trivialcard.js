import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrivialCard extends Component {

    constructor(props) {
        super(props);
        this.state = {myCard: this.props.card};
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.myCard = nextProps;
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

    handleClick(index){
        let card = this.state.myCard;
        card.responded = true;
        card.indexResponse = index;
        if(card.answers[index] === card.correctAnswer){
            card.rightAnswered = true;
        }
        this.setState({myCard: card});
    }

    selectClass(index){
        if(this.state.myCard.indexResponse === index && !this.state.myCard.rightAnswered){
            return "btn btn-block btn-danger";    
        } else if(this.state.myCard.answers[index] === this.state.myCard.correctAnswer){
            return "btn btn-block btn-success";    
        }else {
            return "btn btn-block btn-secondary";
        }
        
    }

    render() {
        let answers = <div></div>;
        if(this.props.card.responded === false){
            answers = this.props.card.answers.map((answer,i)=>
            <button type="button" className="btn btn-block btn-primary" key={i} onClick={()=>this.handleClick(i)}>{answer}</button>
            );    
        }else {
            answers = this.props.card.answers.map((answer,i)=>
            <button type="button" className={this.selectClass(i)} key={i} disabled>{answer}</button>
            );
        }
        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{this.props.card.question}</h4>
                    {answers}
                </div>
            </div>
        </div>

        );
    }
}


export default TrivialCard;