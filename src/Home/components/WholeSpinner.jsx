import * as React from 'react';
import update from 'immutability-helper';

import dareQuestions from './data/dare';
import openingQuestions from './data/opening';
import truthQuestions from './data/truth';
import './TruthOrDare.css';
import SidePanel from './SidePanel';
import SimpleModalWrapped from './Modal';
import SectionArea from './SectionArea';
import SpinMe from './SpinMe';

const { Fragment } = React;


class WholeSpinner extends React.Component {

	constructor(props) {
  	super(props);
    
    this.state = { 
      truthOrDare: 'opening',
      degrees: 0, // parent starts degrees at 1800
      firstSix: [],
      modalStatus: false, // keep modal closed for now
      openingQuestionList: openingQuestions.questions,
      dareQuestionList: dareQuestions.questions,
      truthQuestionList: truthQuestions.questions,
      index: 5,
      question: {key: 5, longtitle: "gotta choose a question type first", shorttitle: "😇"},
    }
    this.startSpinner = null;
  }

  openModal = (status, key) => {
    const { firstSix } = this.state;
    this.setState({
      index: key,
      modalStatus: status,
      question: firstSix[key],
    });
  }

  closeModal = (status) => {
    this.setState({
      modalStatus: status
    });
  }

  markQuestionAsAnswered = () => {
    const { truthOrDare, dareQuestionList, truthQuestionList, index } = this.state;
    if(truthOrDare === 'dare'){
      this.setState({
        dareQuestionList: update(dareQuestionList, {$splice: [[index, 1]]}),
      });
      this.setPropsToDare();
    }else{
      this.setState({
        truthQuestionList: update(truthQuestionList, {$splice: [[index, 1]]}),
      });
      this.setPropsToTruth();
    }
  } 

  setPropsToDare = () => {
    const { dareQuestionList, index } = this.state;
    const shuffledList = dareQuestionList.sort( () => Math.random() - 0.5);
    const six = shuffledList.slice(0,6);
    const question = six[index];

    this.setState(state => ({
      dareQuestionList: shuffledList,
      firstSix: six,
      question,
      truthOrDare: 'dare'
    }));
  }

  setPropsToTruth = () => {
    const { truthQuestionList, index } = this.state;
    const shuffledList = truthQuestionList.sort( () => Math.random() - 0.5);
    const six = shuffledList.slice(0,6);
    const question = six[index];

    this.setState(state => ({
      firstSix: six,
      question: question,
      truthOrDare: 'truth',
      truthQuestionList: shuffledList,
    }));
  }

  startNewRound = () => {
    // Do something here. 
  }

  startWheelSpin = () => {
    let newDegree = Math.floor(Math.random() * 3300);
    this.setState({ // sending state to child component SpinMe
      degrees: newDegree,
    });
  }

  componentDidMount() {
    const { truthOrDare, openingQuestionList} = this.state;
    if(truthOrDare === 'opening') {
      this.setState({
        firstSix: openingQuestionList
      })
    } 
  }

  render() {
    const styles = {
      transform: `rotate(${this.state.degrees}deg)` , 
      transition: `all 6s cubic-bezier(0, .99, .44, .99)`,
    };

    const {
      degrees,
      firstSix,
      modalStatus,
      truthOrDare,
      question,
    } = this.state;
    let questionList;

  	return (
      <Fragment>
        <button onClick={this.startNewRound} className="btn newRound outline">
          <span className="fa fa-shopping-cart">start new round</span>
        </button>
        <div id="wrapper">
        
        <div className="cta-buttons">
          <button onClick={this.setPropsToTruth} className="truth btn outline">
            <span className="fa fa-shopping-cart">Truth</span>
          </button>
          <button onClick={this.setPropsToDare} className="dare btn outline">
            <span className="fa fa-shopping-cart">Dare</span>
          </button>
        </div>
        <SimpleModalWrapped
          handleOpen={this.openModal}
          open={modalStatus}
          truthOrDare={truthOrDare}
          question={question}
          questionAnswered={this.markQuestionAsAnswered}
        />
        <SidePanel />
        <div id="wheel">
          <div id="innerWheel" style={styles}>
              <SectionArea
                firstSix={firstSix}
                handleOpen={this.openModal}
                truthOrDare={truthOrDare}
                questionList={questionList}
              />
          </div>
          <SpinMe 
            startSpinner={this.startWheelSpin}
            degrees={degrees}
          />
        </div>
      </div>
      </Fragment>
    );
  }
}

export default WholeSpinner;