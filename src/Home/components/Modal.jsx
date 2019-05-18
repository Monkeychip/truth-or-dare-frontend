import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    left: `36% !important`
  },
  root: {
    background: '#21b573',
    borderRadius: 3,
    border: 0,
    color: 'white',
  },
  title: {
    paddingBottom: 19
  }
});

class SimpleModal extends React.Component {
  state = {
    defaultQuestion: {key: 5, longtitle: "gotta choose a question type first", shorttitle: "😇"},
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.handleOpen(false);
    this.setState({ open: false });
  };

  markQuestionDone = () => {
    const { questionAnswered, handleOpen } = this.props;
    questionAnswered(); // pass to parent
    handleOpen(false);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.props.open){
        this.setState({ open : nextProps.open });
    }
  }

  render() {
    const { classes, truthOrDare, firstSixPassingDown, passingDownKey } = this.props;
    const { defaultQuestion } = this.state;
    let buttonText = truthOrDare === 'dare' ? 'Dare Done' : 'Truth was Told';
    let question = firstSixPassingDown.find(question => question.key === passingDownKey) ? firstSixPassingDown.find(question => question.key === passingDownKey) : defaultQuestion
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title" className={classes.title}>
              {question.shorttitle}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              {question.longtitle}
            </Typography>
            <div className="button-holder">
              <Button onClick={this.handleClose}>Pass</Button>
              <Button onClick={this.markQuestionDone} variant="contained" className="modal-button-right"
                classes={{
                  root: classes.root, // class name, e.g. `classes-nesting-root-x`
                  label: classes.label, // class name, e.g. `classes-nesting-label-x`
                }}>{buttonText}</Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
