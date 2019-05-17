import * as React from 'react';
import './TruthOrDare.css';
import SidePanel from './SidePanel';
import SimpleModalWrapped from './Modal';
import SectionArea from './SectionArea';
import SpinMe from './SpinMe';

const { Fragment } = React;

const testObject = [
  { key: 0,
    shorttitle : 'Mall walking',
    longtitle : 'What was the funniest thing that happened to you at a mall?',
    type: 'truth',
    asked: false
  },
  { key: 1,
    shorttitle: 'Gratitude',
    longtitle: 'What is the best thing about your life right now?', 
    type: 'truth', asked: false },
  { key: 2,
    shorttitle: 'You oughta know',
    longtitle: 'What is one talent most people here don’t know that you have?',
    type: 'truth', asked: false 
  },
  { key: 3,
    shorttitle: 'Secrets',
    longtitle: 'What is a secret that you kept from your parents when you were growing up?',
    type: 'truth', asked: false
  },
  { key: 4,
    shorttitle: 'Nail biter',
    longtitle: 'What is a bad habit that you have?',
    type: 'truth', asked: false 
  },
  { key: 5,
    shorttitle: 'Don’t eat this',
    longtitle: 'What was the worst thing you ever cooked or baked?',
    type: 'truth', asked: false
  },
  { key: 6,
    shorttitle: 'There’s no time', 
    longtitle: 'If your house was burning what three things would you grab?',
    type: 'truth', asked: false
  },
  { key: 7,
    shorttitle: 'So mean',
    longtitle: 'What’s the meanest thing you’ve ever said to someone?',
    type: 'truth', asked: false
  },
  { key: 8,
    shorttitle: 'switcheroo',
    longtitle: 'Of the people in this room, who do you most want to switch lives with and why?',
    type: 'truth', asked: false
  },
  { key: 9,
    shorttitle: 'The opposite sex',
    longtitle: 'If you were the opposite sex for one hour, what would you do?',
    type: 'truth', asked: false }
];

class WholeSpinner extends React.Component {

	constructor(props) {
  	super(props);
    
    this.state = { 
      degrees: 0, // parent starts degrees at 1800
      firstSix: [],
      modalStatus: false, // keep modal closed for now
      questionList: testObject,
      questionKey: 5,
      question: '',
    }
    this.startSpinner = null;
  }

  openModal = (status) => {
    this.setState({
      modalStatus: status
    });
  }

  closeModal = (status) => {
    this.setState({
      modalStatus: status
    });
  }

  markQuestionAsAnswered = (key) => {
    this.setState({
      ...this.state.questionList[5], asked: true});
  }

  setPropsToDare = () => {
    this.setState(state => ({
      truthOrDare: 'dare'
    }));
  }

  setPropsToTruth = () => {
    this.setState(state => ({
      truthOrDare: 'truth'
    }));
  }

  shuffleStuff = () => {
    let shuffledList = this.state.questionList.sort( () => Math.random() - 0.5);
    let firstSix = shuffledList.slice(0,6);
    console.log(firstSix,'firstSix')
    let question = firstSix[5];
    this.setState({ question: question });

    this.setState({ 
      firstSix,
      questionList: shuffledList,
      question: question,
    })
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

  // getQuestions = () => {
  //   fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes/6')
  //     .then(response => response.json())
  //     .then(results => this.setState({ questionList: results}))
  //     // here filter using the this.props.truthOrDare results
  // }

  componentDidMount() {
    // this.getQuestions();
    this.shuffleStuff();
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
      questionList,
    } = this.state;

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