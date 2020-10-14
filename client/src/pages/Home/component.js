import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { useStyles, StyledTableCell, StyledTableRow } from './style';
import { getUsers, searchUsers } from '../../utils/getUsers';

export default function Home() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [usersNulled, setUsersNulled] = useState([]);

  const search = (firstname) => {
    const newUsers = searchUsers(usersNulled, firstname);
    const resultUsers = firstname === '' ? usersNulled : newUsers;
    setUsers(resultUsers);
  };

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response);
      setUsersNulled(response);
    });
  }, []);

  return (
    <Container>
      <Paper className={classes.paper}>
        <FormGroup>
          <FormControl>
            <TextField onInput={ (e) => search(e.target.value) } id="outlined-basic" label="Filter by name" variant="outlined" />
          </FormControl>
        </FormGroup>
      </Paper>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.cellId}></StyledTableCell>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Full Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user, index) => (
              <StyledTableRow key={`${user.name}-${user.id}`}>
                <StyledTableCell className={classes.cellId}>
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>
                  <Link to={`/user/${user.username}`}>{user.username}</Link>
                </StyledTableCell>
                <StyledTableCell>
                  {`${user.email}`}
                </StyledTableCell>
                <StyledTableCell>
                  {`${user.firstname} ${user.lastname}`}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
