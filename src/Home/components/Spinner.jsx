import * as React from 'react';
import './TruthOrDare.css';
import SpinArea from './SpinArea';

const STATUS_SPINNING = 'spinning';
const STATUS_READY = 'ready';
const { Fragment } = React;


class Spinner extends React.Component {

	constructor(props) {
  	super(props);
    
    this.state = { done: false, prevStatus: this.props.status }
    this.doneTimeout = null;
  }
  
  componentDidUpdate(prevProps) {
      
  	if (prevProps.status === STATUS_SPINNING && this.props.status === STATUS_READY) {
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
    let test = document.querySelectorAll('.sec');
    test.forEach((i) => {
      let t = i;
      console.log(t,'here')      
    });

  }
  
  render() {
  	let spinClassName = this.props.status === STATUS_READY ? 'done-spinning' : 'spinning';
    
    if (this.state.done) {
    	spinClassName = 'done-spinning';
    }

    const spinnerAreasArray = ['test1','test2','test3','test4','test5','test6']; 

  	return (
      <Fragment>
        <div id="wrapper">
          <div id="wheel">
            <div id="innerWheel">
                <SpinArea spinners={spinnerAreasArray}/>
            </div>
            <div id="spin" onClick={this.props.onClick} className={spinClassName}>
                <div id="innerSpin"></div>
            </div>
            <div id="shine"></div>
          </div>
        <div id="txt"></div>
      </div>
      </Fragment>
    );
  }
}

export default Spinner;