import * as React from 'react';
import './TruthOrDare.css';
import styled, { keyframes } from 'styled-components';

class SpinMe extends React.Component {
  
  constructor(props) {
  	super(props);
    
    this.state = { 
      clicks: 0,
      degree: 1800,
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
// ARG need to come up with variables for duration and count
    const Spinner = styled.div`
      animation: ${spinTheSpinner};
      animation-duration: .2s;
      animation-iteration-count: 4;  
    `;
    //onClick={ this.onSpinnerClick}
  	return (
      <Spinner id="spin" onClick={this.onSpinnerClick}>
          <div id="innerSpin"></div>
      </Spinner>
    );
  }
}

export default SpinMe;