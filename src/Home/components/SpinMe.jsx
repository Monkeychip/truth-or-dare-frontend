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
  
  }
  
  componentWillUnmount() {
	  clearTimeout(this.doneTimeout);
  }
  
  componentDidMount() {
    
  }
  
  render() {
    const spinTheSpinner = keyframes`
      0%, 100%{
        transform: rotate(0deg);
      }

      50% {
        transform: rotate(7deg);
      }
    `;
    const spinCount = this.props.degrees/ 260 // ARG: revisit

    const Spinner = styled.div`
      animation: ${spinTheSpinner};
      animation-duration: .2s;
      animation-iteration-count: ${spinCount};
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