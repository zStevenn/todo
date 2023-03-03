import { Link as RouterLink } from 'react-router-dom';
import MuiLink from '@mui/material/Link';

const Link = ({ to, children, ...rest }) => (
  <MuiLink component={RouterLink} to={to} {...rest}>
    {children}
  </MuiLink>
);

export default Link;
