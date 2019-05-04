import * as React from 'react';
import ReactDOM from 'react-dom';
import './TruthOrDare.css';
import SimpleModalWrapped from './Modal';
import SectionArea from './SectionArea';
import SpinMe from './SpinMe';
import styled, { keyframes } from 'styled-components';

const { Fragment } = React;

class WholeSpinner extends React.Component {

	constructor(props) {
  	super(props);
    
    this.state = { 
      degrees: 1800, // parent starts degrees at 1800
      spinningStatus: false, // parent starts state as false 
    }
    this.startSpinner = null;
  }

  startWheelSpin = () => {
    let newDegree = Math.floor(Math.random() * 3300);
    this.setState({ // sending state to child component SpinMe
      degrees: newDegree,
      spinningStatus: true,
    });
  }

  componentDidUpdate(prevProps) { //ARG I don't think this is doing anything yet
 
  }
  
  componentDidMount() {

  }
  
  render() {

    const styles = {
      transform: `rotate(${this.state.degrees}deg)` ,
      transition: `all 6s cubic-bezier(0, .99, .44, .99)`,
    };

    const spinnerAreasArray = ['test1','test2','test3','test4','test5','test6']; 

  	return (
      <Fragment>
        <div id="wrapper">
        <SimpleModalWrapped />
        <div id="wheel">
          <div id="innerWheel" style={styles}>
              <SectionArea spinners={spinnerAreasArray} />
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