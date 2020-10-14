import { createMuiTheme } from '@material-ui/core/styles';
import { bpTheme } from './utils/breakpoints';

const theme = createMuiTheme({
  typography: {
    body2: {
      marginBottom: '0px',
      lineHeight: '1.3'
    },
    h2: {
      fontSize: 24,
      lineHeight: '32px',
      marginBottom: '20px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      [bpTheme.breakpoints.down("sm")]: {
        fontSize: 41,
        lineHeight: '18px',
      },
    },
  },
});

export default theme;
