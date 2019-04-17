import * as React from 'react';
import ReactDOM from 'react-dom';
import './TruthOrDare.css';
import SectionArea from './SectionArea';
import SpinMe from './SpinMe';
import styled, { keyframes } from 'styled-components';

const { Fragment } = React;

class WholeSpinner extends React.Component {

	constructor(props) {
  	super(props);
    
    this.state = { 
      done: false,
      spinningStatus: false, // parent starts state as false 
    }
    this.startSpinner = null;
  }

  startWheelSpin = () => {
    this.setState({ // sending state to child component SpinMe
      spinningStatus: true
    });
  }


  componentDidUpdate(prevProps) {
    console.log(prevProps,"updated");
  	if (prevProps.spinningStatus ) { // it's spinning
   		clearTimeout(this.startSpinner);
    	this.setState({ spinningStatus: false });
      this.startSpinner = setTimeout(() => {
        this.setState({ spinningStatus: true });
        console.log('insidestartspinner')
      }, 1000);
    }
  }
  
  componentWillUnmount() {
	  // clearTimeout(this.startSpinner);
  }
  
  componentDidMount() {

  }
  
  render() {
    // ARG degree will eventually have to come from somewhere
    const rotate = keyframes`
      to {
        transform: rotate(1800deg); 
      }
    `;

    const InnerWheel = styled.div`
      animation: ${rotate};
      animation-duration: 1s;
    `;

    const spinnerAreasArray = ['test1','test2','test3','test4','test5','test6']; 

  	return (
      <Fragment>
        <div id="wrapper">
          <div id="wheel">
            <InnerWheel id="innerWheel">
                <SectionArea spinners={spinnerAreasArray} />
            </InnerWheel>
            <SpinMe 
              startSpinner={this.startWheelSpin}
            />
            <div id="shine"></div>
          </div>
        <div id="txt"></div>
      </div>
      </Fragment>
    );
  }
}

export default WholeSpinner;