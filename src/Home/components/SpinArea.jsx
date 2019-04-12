import * as React from 'react';
import './TruthOrDare.css';

// const STATUS_SPINNING = 'spinning';
// const STATUS_READY = 'ready';
const { Fragment } = React;


class SpinArea extends React.Component {

  render() {
    const { spinners } = this.props;

  	return (
      <div>
        {spinners.map((t,index) => (
          <div id={`section${index}`} key={t} className="sec">
            <span></span>
          </div>
        ))}
      </div>
    )
  };
}

export default SpinArea;
