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
      key: 5,
      players: [],
    }
    this.startSpinner = null;
  }

  openModal = (status, key) => {
    this.setState({
      key,
      modalStatus: status,
    });
  }

  closeModal = (status) => {
    this.setState({
      modalStatus: status
    });
  }

  markQuestionAsAnswered = () => {
    const { truthOrDare, dareQuestionList, truthQuestionList, key, players } = this.state;
    
    this.setState({
      players: update(players, {$splice: [[0,1]]})
    })

    if(truthOrDare === 'dare'){
      let index = dareQuestionList.findIndex(x => x.key === key);
      this.setState({
        dareQuestionList: update(dareQuestionList, {$splice: [[index, 1]]}),
      }, () => {
        this.setPropsToDare();
      });
    } else {
      let index = truthQuestionList.findIndex(x => x.key === key);
      this.setState({
        truthQuestionList: update(truthQuestionList, {$splice: [[index, 1]]}),
      }, () => {
        this.setPropsToTruth();
      });
    }
  } 

  setPropsToDare = () => {
    const { dareQuestionList } = this.state;
    const shuffledList = dareQuestionList.sort( () => Math.random() - 0.5);
    const six = shuffledList.slice(0,6);
    this.setState(state => ({
      dareQuestionList: shuffledList,
      firstSix: six,
      truthOrDare: 'dare'
    }));
  }

  setPropsToTruth = () => {
    const { truthQuestionList } = this.state;
    const shuffledList = truthQuestionList.sort( () => Math.random() - 0.5);
    const six = shuffledList.slice(0,6);

    this.setState(state => ({
      firstSix: six,
      truthOrDare: 'truth',
      truthQuestionList: shuffledList,
    }));
  }

  startWheelSpin = () => {
    let newDegree = Math.floor(Math.random() * 3300);
    this.setState({ // sending state to child component SpinMe
      degrees: newDegree,
    });
  }

  userList = () => {
    fetch('http://localhost:5000/play')
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      return myJson.sort( () => Math.random() - 0.5);
      // return myJson
    })
    .then(shuffled => {
      this.setState({players: shuffled});
      console.log('done')
    })
  }

  reshufflePlayers = () => {
    const { players } = this.state;
    let shuffled = players.sort( () => Math.random() - 0.5); 
    this.setState({ players: shuffled})
  }

  componentDidMount() {
    this.userList();
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
      key,
      firstSix,
      modalStatus,
      players,
      truthOrDare,
    } = this.state;
    let questionList;
  	return (
      <Fragment>
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
          firstSixPassingDown={firstSix}
          passingDownKey={key}
          questionAnswered={this.markQuestionAsAnswered}
        />
        {players.length > 0 &&
          <SidePanel players={players} updatePlayers={this.userList} reshufflePlayers={this.reshufflePlayers}/>
        }
        <div id="wheel">
          <div id="innerWheel" style={styles}>
              <SectionArea
                firstSixPassingDown={firstSix}
                handleOpen={this.openModal}
                truthOrDare={truthOrDare}
                questionList={questionList}
                players={players}
              />
          </div>
          <SpinMe 
            startSpinner={this.startWheelSpin}
            degrees={degrees}
            firstSixPassingDown={firstSix}
          />
        </div>
      </div>
      </Fragment>
    );
  }
}

export default WholeSpinner;