import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { getUser } from '../../utils/getUsers';

import { useStyles } from './style';

function User() {
  const { slug = '' } = useParams();
  const classes = useStyles();
  const nulledUser = {
    id : 0,
    username : '',
    firstname : '',
    lastname : '',
    email : '',
  };
  const [user, setUser] = useState(nulledUser);

  useEffect(() => {
    getUser(slug).then((response) => {
      setUser(response);
    });
  }, []);

  return (
    <Container>
      <Paper className={classes.paper}>

        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h2">
              {user.username}
            </Typography>
            <List className={classes.root}>
              <ListItem>
                <ListItemText primary={user.firstname} secondary="firstname"/>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary={user.lastname} secondary="lastname"/>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary={user.email} secondary="email"/>
              </ListItem>
            </List>
            <CardActions>
              <Link to={'/'}><Button size="small">Back</Button></Link>
            </CardActions>
          </CardContent>
        </Card>

      </Paper>
    </Container>
  );
}

export default User;
