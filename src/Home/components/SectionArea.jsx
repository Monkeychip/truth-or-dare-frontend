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

class SectionArea extends React.Component {

  openModal = (key) => {
    this.props.handleOpen(true, key);
  }

  render() {
    const { classes, firstSix, questionList} = this.props;

  	return (
      <div>
        {firstSix.map((question,index) => (
          <div id={`section${index}`} key={question.key} className="sec" onClick={() => this.openModal(question.key)}>
            <span className={classes.sectionText}>
              <Typography variant="h5" gutterBottom className={classes.typography}>
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
