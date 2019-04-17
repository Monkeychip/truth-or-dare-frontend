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
    // ARG: this is where you need to revisit figure out spinner ticker.
    const {
      clicks,
      degree,
    } = this.state;

    let newDegree = degree * clicks;
    let extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
    let totalDegree = newDegree + extraDegree;
    // console.log('click props',this.props,'state', this.state)
  	this.setState(
      { spinningStatus: true},
      () => { setTimeout(() => this.setState({
        clicks: clicks + 1, 
        degree: totalDegree,
        spinningStatus: false,
       }), 100) }
    );      
    
    /** make the spin btn to tilt every
		time the edge of the section hits 
		the indicator */

    // let sections = document.querySelectorAll('.sec');
    // sections.forEach((section) => {
		// 	let noY = 0;
		// 	let c = 0;
    //   let n = 700;	
		// 	let interval = setInterval(() => {
		// 		c++;				
		// 		if (c === n) { 
		// 			clearInterval(interval);				
    //     }

    //     let parentWheelPos = document.querySelector('#wheel').getBoundingClientRect();
    //     let childSectionPos = section.getBoundingClientRect();
    //     let relativePos = {};

    //     relativePos.top = childSectionPos.top - parentWheelPos.top;
        
    //     // console.log(relativePos.top) // ARG revisit
        
		// 		if (relativePos.top < 23.89) {
    //       clearTimeout(this.doneTimeout);
    //       this.setState({ done: true });
		// 			// document.querySelector('#spin').addClass('spin');
		// 			setTimeout(() => { 
    //          this.setState({ done: false }); 
		// 				// document.querySelector('#spin').removeClass('spin');
		// 			}, 100);	
		// 		}
    //   }, 10);
		// 	// noY = t.offset().top;
    // });
  }

  componentDidUpdate(prevProps) {
  	if (prevProps.status ) {
   		clearTimeout(this.doneTimeout);
    	this.setState({ done: true });
      this.doneTimeout = setTimeout(() => {
        this.setState({ done: false });
      }, 1000);
    }
  }
  
  componentWillUnmount() {
	  clearTimeout(this.doneTimeout);
  }
  
  componentDidMount() {
    
  }
  
  render() {
    const rotate = keyframes`
      0%, 100%{
        transform: rotate(0deg);
      }

      50% {
        transform: rotate(7deg);
      }
    `;
// ARG need to come up with variables for duration and count
    const Spinner = styled.div`
      animation: ${rotate};
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