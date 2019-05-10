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
  players: {
    margin: 10,
  },
  titleBar: {
    display: "flex",
    margin: `21px 0px`,
    justifyContent: "space-around"
  }
});

// function PermanentDrawerRight(props) {
class PermanentDrawerRight extends React.Component {

  constructor(props) {
    super(props);
    this.state = {person: []};
  }
  state = {
    userList: [],
  }
  componentDidMount() {
    // this.UserList();
  }

  // UserList() => {
  //   console.log('for now');
  //   // $.getJSON('https://randomuser.me/api/')
  //   //   .then(({ results }) => this.setState({ person: results }));
  // }
  render() {
    const { classes } = this.props;
    let userList = ['meep','meeping 2']
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
              <Button className={classes.button}>
                Refresh List
              <RefreshIcon className={classes.rightIcon} />
              </Button>
            </div>
          <List>
            {userList.map((text, index) => (
              <ListItem button key={text}>
                <Avatar alt="Some dude" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                <ListItemText primary={text} />
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
