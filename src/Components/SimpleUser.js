import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



const SimpleUser = props => {
  const {id, username, avatarImage, handleUserClick, classes } = props

  const startPrivateChat = ()=>{
    console.log("Clicked")
    console.log(id)
    handleUserClick && handleUserClick(id)
  }
  return (
    <ListItem alignItems="flex-start" key={id} onClick={startPrivateChat}>
        {
          avatarImage &&
              <ListItemAvatar>
                <Avatar alt="add image" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
        }
        <ListItemText
          primary={username}
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                Here goes description
              </Typography>
              {" — To do: Add description"}
            </React.Fragment>
          }
        />
    </ListItem>
  )
}
export default SimpleUser