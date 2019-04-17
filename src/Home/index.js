import * as React from 'react';
import WholeSpinner from './components/WholeSpinner';
// import './TruthOrDare.css';

const { Fragment } = React;

class home extends React.PureComponent {
  // region Bound instance methods
  
  render() {
    return (
      <div className="container">
          <Fragment>
            <WholeSpinner/>
          </Fragment>
      </div>
    );
  }

  // endregion
}

export default home;

