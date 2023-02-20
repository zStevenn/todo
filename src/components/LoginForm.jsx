import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Sign In
      </Button>
    </Box>
  );
}

export default LoginForm;
