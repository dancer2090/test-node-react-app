import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: '450px',
    maxWidth: '100%',
    padding: '20px',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    background: 'transparent',
    boxShadow: 'none',
  },
  propsBlock: {
    marginTop: '20px',
    marginBottom: '15px',
    fontSize: '18px',
  },
  propRow: {
    marginBottom: '10px',
    fontSize: '18px',
  },
  propTitle: {
    fontWeight: '700',
  },
}));
