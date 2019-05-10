import * as React from 'react';
import PropTypes from 'prop-types';

import './TruthOrDare.css';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  sectionText: {
    marginTop: -165,
    position: 'relative',
    display: 'block',
    textAlign: 'center',
    marginLeft: -25, // This is going to change based on word size :/
  }
});

class SectionArea extends React.Component {

  openModal = () => {
    this.props.handleOpen(true);
  }

  render() {
    const { classes, questionList } = this.props;
    console.log(questionList,"quetions")
  	return (
      <div>
        {questionList.map((t,index) => (
          <div id={`section${index}`} key={t} className="sec" onClick={this.openModal}>
            <span className={classes.sectionText}>
              <Typography variant="h5" gutterBottom >
                {t.substring(0,3)}
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
