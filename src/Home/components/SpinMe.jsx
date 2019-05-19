import * as React from 'react';
import './TruthOrDare.css';
import styled, { keyframes } from 'styled-components';

class SpinMe extends React.Component {
  
  constructor(props) {
  	super(props);
    
    this.state = { 
      clicks: 0,
      done: false,
      spinningStatus: this.props.spinningStatus,
    }
    this.doneTimeout = null;
  }

  onSpinnerClick = () => {
    this.props.startSpinner(); // set parent state status and rerenders to set animation
    
  	this.setState(
      { spinningStatus: true},
      () => { setTimeout(() => this.setState({
        spinningStatus: false,
       }), 100) }
    ); 
  }

  componentDidUpdate(prevProps) {
    if (this.props.degrees !== prevProps.degrees) {
         this.degreesChanged = this.props.degrees - prevProps.degrees;
    };
  }
  
  componentDidMount() {

  }
  
  render() {
    let iterationCount = (Math.abs(this.degreesChanged)/360)*2.4
    const spinTheSpinner = keyframes`
      0%, 100%{
        transform: rotate(0deg);
      }

      50% {
        transform: rotate(7deg);
      }
    `;
    
    const Spinner = styled.div`
      /* animation: ${spinTheSpinner};
      animation-duration: .25s;
      animation-iteration-count: ${iterationCount}; */
    `;
  	return (
      <Spinner id="spin" onClick={this.onSpinnerClick}>
          <div id="innerSpin">
            <p>SPIN</p>
          </div>
      </Spinner>
    );
  }
}

export default SpinMe;