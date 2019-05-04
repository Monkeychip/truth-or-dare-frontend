import * as React from 'react';
import './TruthOrDare.css';
import 'typeface-roboto';

class SectionArea extends React.Component {

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

export default SectionArea;
