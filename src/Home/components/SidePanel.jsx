import * as React from 'react';
import PropTypes from 'prop-types';
// import Iframe from 'react-iframe';

// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RefreshIcon from '@material-ui/icons/Refresh';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';

const drawerWidth = `25%`;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  button: {
    textTransform: 'capitalize',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  listItem: {
    padding: 5,
  },
  playerList: {
    margin: 10,
  },
  playerName: {
    textTransform: 'capitalize',
  },
  selected: {
    backgroundColor: '#ff0077',
    borderRadius: 50,
  },
  titleBar: {
    display: "flex",
    margin: `21px 0px`,
    justifyContent: "space-around"
  }
});

// function PermanentDrawerRight(props) {
class PermanentDrawerRight extends React.Component {

  state = {
    players: [],
    currentPlayer: false,
  }

  componentDidMount() {
    // this.UserList();
  }

  // UserList = () => {
  //   fetch('http://localhost:5000/play')
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(myJson => {
  //     return myJson.sort( () => Math.random() - 0.5);
  //   })
  //   .then(shuffled => {
  //     this.setState({players: shuffled});
  //   })
  // }

  

  render() {
    const { classes, players } = this.props;
    console.log(this.props.players)
    return (
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="right"
        >
          <div className={classes.toolbar} />
            <div className={classes.titleBar} >
              <Typography variant="h5" gutterBottom className={classes.players}>
                Players
              </Typography>
              <Button className={classes.button} onClick={this.UserList}>
                Refresh List
              <RefreshIcon className={classes.rightIcon} />
              </Button>
            </div>
          <List className={classes.playerList}>
             { this.props.players &&
                this.props.players.map((player, i) => (
                  <ListItem button key={i} className={
                    classNames(
                    classes.listItem, 
                    {[classes.selected]: i === 0}
                    )
                  }>
                    <ListItemText primary={player.name} className={classes.playerName}/>
                  </ListItem>
               ))
            }
          </List>
        </Drawer>
      </div>
    );
  };
};

PermanentDrawerRight.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerRight);
