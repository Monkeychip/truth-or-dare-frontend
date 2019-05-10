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

  state = {
    questions: [],
  }

  openModal = () => {
    this.props.handleOpen(true);
  }

  closeModal = () => {
    this.props.handleOpen(false);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = () => {
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes/6')
      .then(response => response.json())
      .then(results => this.setState({ questions: results}))
      // here filter using the this.props.truthOrDare results
  }

  render() {
    const { classes } = this.props;
    const { questions } = this.state;

  	return (
      <div>
        {questions.map((t,index) => (
          <div id={`section${index}`} key={t} className="sec" onClick={this.openModal}>
            <span className={classes.sectionText}>
              <Typography variant="h5" gutterBottom >
                {t.substring(1,5)}
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
