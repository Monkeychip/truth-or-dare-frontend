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
    // paddingLeft: 31,
  },
  players: {
    margin: 10,
  },
  playerName: {
    textTransform: 'capitalize',
  },
  selected: {
    backgroundColor: '#ff0077',
    borderRadius: 50,
    backgroundClip: `content-box`,
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
    this.UserList();
  }

  UserList = () => {
    // const url = 'https://www.formstack.com/api/v2/form/3460051/submission.json';
    const fullUrl = 'https://www.formstack.com/api/v2/form/3460051/submission.json?page=1&per_page=25&data=true&oauth_token=07c3121dbaf994a338239de8ecc42fca';
    // const bearer = 'oauth_token=' + '07c3121dbaf994a338239de8ecc42fca';
    fetch(fullUrl, {
      method: 'GET',
      headers: {
        // 'Authorization': bearer,
        // 'data': true,
        'Content-Type' : 'application/json'
      }
    }).then(function(response) {
      console.log(response,'response')
    })
    // fetch('https://randomuser.me/api/')
      // .then(function(response) {
      // return response.json();
    // })
    // .then(({ results }) => this.setState({ players: results }));
  }

  render() {
    const { classes } = this.props;
    console.log(this.state.players,'players')
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

          {/* <Iframe url="https://argarbarino.formstack.com/forms/truthordare"
          // could put it in other page?
            /> */}
          <List>
            {this.state.players.map((item, i) => (
              <ListItem button key={i} className={
                classNames(
                  classes.listItem, 
                  // {[classes.selected]: item.gender === 'male'} // ARG: change based on person
                )
              }>
                {/* <Avatar alt={item.name.first} src={item.picture.medium} /> */}
                <ListItemText primary={item.data.value} className={classes.playerName}/>
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
