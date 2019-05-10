import * as React from 'react';
import './TruthOrDare.css';
import SidePanel from './SidePanel';
import SimpleModalWrapped from './Modal';
import SectionArea from './SectionArea';
import SpinMe from './SpinMe';
// import styled, { keyframes } from 'styled-components';

const { Fragment } = React;

class WholeSpinner extends React.Component {

	constructor(props) {
  	super(props);
    
    this.state = { 
      degrees: 1800, // parent starts degrees at 1800
      modalStatus: false, // keep modal closed for now
      questionList: [],
    }
    this.startSpinner = null;
  }

  openModal = (status) => {
    this.setState({
      modalStatus: status
    });
  }

  closeModal = (status) => {
    this.setState({
      modalStatus: status
    });
  }

  setPropsToDare = () => {
    this.setState(state => ({
      truthOrDare: 'dare'
    }));
  }


  setPropsToTruth = () => {
    this.setState(state => ({
      truthOrDare: 'truth'
    }));
  }

  startWheelSpin = () => {
    let newDegree = Math.floor(Math.random() * 3300);
    this.setState({ // sending state to child component SpinMe
      degrees: newDegree,
    });
  }

  getQuestions = () => {
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes/6')
      .then(response => response.json())
      .then(results => this.setState({ questionList: results}))
      // here filter using the this.props.truthOrDare results
  }

  componentDidMount() {
    this.getQuestions();
  }


  render() {
    const styles = {
      transform: `rotate(${this.state.degrees}deg)` ,
      transition: `all 6s cubic-bezier(0, .99, .44, .99)`,
    };
  	return (
      <Fragment>
        <div id="wrapper">
        <div className="cta-buttons">
          <button onClick={this.setPropsToTruth} className="truth btn outline place-order">
            <span className="fa fa-shopping-cart">Truth</span>
          </button>
          <button onClick={this.setPropsToDare} className="dare btn outline">
            <span className="fa fa-shopping-cart">Dare</span>
          </button>
        </div>
        <SimpleModalWrapped
          handleOpen={this.openModal}
          open={this.state.modalStatus}
          truthOrDare={this.state.truthOrDare}
          questionList={this.state.questionList}
        />
        <SidePanel />
        <div id="wheel">
          <div id="innerWheel" style={styles}>
              <SectionArea
                handleOpen={this.openModal}
                truthOrDare={this.state.truthOrDare}
                questionList={this.state.questionList}
              />
          </div>
          <SpinMe 
            startSpinner={this.startWheelSpin}
            degrees={this.state.degrees}
          />
        </div>
      </div>
      </Fragment>
    );
  }
}

export default WholeSpinner;