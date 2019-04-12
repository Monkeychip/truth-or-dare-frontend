import * as React from 'react';
import Spinner from './components/Spinner';
// import './TruthOrDare.css';

const { Fragment } = React;
const STATUS_SPINNING = 'spinning';
const STATUS_READY = 'ready';

class home extends React.PureComponent {
  // region Bound instance methods
  state = {
    clicks: 0,
    degree: 1800,
    isSaving: false,
    spinClassName: 'no',
  };
  
  startSpin() {
    this.setState({ clicks: this.state.clicks += 1 });

    // /**
    //  * multiply the degree by number of clicks
    //  * generate random number between 1 - 360,
    //  * then add to the new degree
    //  */

    const {
      clicks,
      degree,
    } = this.state;

    let newDegree = degree * clicks;
    let extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
    let totalDegree = newDegree + extraDegree;

  	this.setState(
    	{ isSaving: true },
      () => { setTimeout(() => this.setState({ isSaving: false }), 100) }
    );      
  }

  render() {

    return (
      <div className="container">
          <Fragment>
            <h2 className="header">Meep</h2>
            <Spinner
              status={this.state.isSaving ? STATUS_SPINNING : STATUS_READY}
              onClick={this.startSpin.bind(this)}
            />
          </Fragment>
      </div>
    );
  }

  // endregion
}

export default home;

