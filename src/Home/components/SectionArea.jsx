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

  openModal = () => {
    this.props.handleOpen(true);
  }

  render() {
    const { classes, questionList } = this.props;
  	return (
      <div>
        {questionList.map((t,index) => (
          <div id={`section${index}`} key={t} className="sec" onClick={this.openModal}>
            <span className={classes.sectionText}>
              <Typography variant="h5" gutterBottom className={classes.typography}>
                {t.substring(0,Math.floor(Math.random() * 20))}
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
