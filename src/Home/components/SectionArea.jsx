import * as React from 'react';
import PropTypes from 'prop-types';

import './TruthOrDare.css';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  sectionText: {
    marginTop: -165,
    position: 'relative',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  typography: {
    fontSize: 21,
    lineHeight: '21px',
    marginTop: -15,
  }
});
// SUB COMPONENT
class SectionArea extends React.Component {

  constructor(props) {
  	super(props);
    
    this.state = { 
      key: 5,
    }
    this.startSpinner = null;
  }

  openModal = (key) => {
    this.props.handleOpen(true, key);
  }

  render() {
    const { classes, firstSixPassingDown} = this.props;
  	return (
      <div>
        {firstSixPassingDown.map((question,index) => (
          <div id={`section${index}`} key={question.key} className="sec" >
            <span className={classes.sectionText}>
              <Typography variant="h5" gutterBottom className={classes.typography} onClick={() => this.openModal(question.key)}>
                {question.shorttitle}
              </Typography>
            </span>
          </div>
        ))}
      </div>
    )
  };
}
SectionArea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SectionArea);
