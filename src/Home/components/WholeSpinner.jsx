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
      spinningStatus: false, // parent starts state as false 
      degrees: 1800, // parent starts degrees at 1800
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
    // ARG degree will eventually have to come from somewhere
    // const rotate = keyframes`
    //   to {
    //     transform: rotate(${this.state.degrees}deg); 
    //   }
    // `;

    const InnerWheel = styled.div`
      transform: rotate(${this.state.degrees}deg);
      transition: all 6s cubic-bezier(0, .99, .44, .99); 
    `; // ARG something about how this is being rendered, play with timing . 

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
          </div>
      </div>
      </Fragment>
    );
  }
}

export default WholeSpinner;