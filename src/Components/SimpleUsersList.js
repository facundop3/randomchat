import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';


import SimpleUser from './SimpleUser'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

function AlignItemsList(props) {
  const { classes, users, handleUserClick, filter } = props
  const matches = users.filter(({username}) => username && username.toLowerCase().includes(filter.toLowerCase()))
  return (
    <List className={classes.root}>
      {
        matches.length ?

          matches.map(({username, id, avatarImage}) =>
            <SimpleUser
            handleUserClick={handleUserClick}
            avatarImage={avatarImage}
            username={username}
            classes={classes}
            id={id}
            />)
          :
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="No users online"
              secondary={
                <React.Fragment>
                  <a href="https://www.youtube.com/watch?v=MX6MvV8cbh8" target="_blank"  rel="noopener noreferrer">
                    <Typography component="span" className={classes.inline} color="textPrimary">
                      So lonely, so lonely, so lonely <span role="img" aria-label="Music">🎶</span>
                    </Typography>
                  </a>
                </React.Fragment>
              }
            />
          </ListItem>
      }

    </List>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);