import * as React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RefreshIcon from '@material-ui/icons/Refresh';
import Typography from '@material-ui/core/Typography';

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
    paddingLeft: 31,
  },
  players: {
    margin: 10,
  },
  playerName: {
    textTransform: 'capitalize',
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
  // constructor(props) {
  //   super(props);

  //   this.state = {players: []};
  // }

  componentDidMount() {
    this.UserList();
  }

  UserList = () => {
    fetch('https://randomuser.me/api/')
      .then(function(response) {
      return response.json();
    })
    .then(({ results }) => this.setState({ players: results }));
  }

  render() {
    const { classes } = this.props;

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
          <List>
            {this.state.players.map((item, i) => (
              <ListItem button key={i} className={classes.listItem}>
                <Avatar alt={item.name.first} src={item.picture.medium} />
                <ListItemText primary={item.name.first} className={classes.playerName}/>
              </ListItem>
            ))}
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
