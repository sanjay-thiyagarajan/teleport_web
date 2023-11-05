import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MuiAlert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom';

function LoginPage() {
    const theme = createTheme({
        palette: {
            primary: {
                light: 'white',
                main: '#1F3F49',
                dark: '#1F3F49',
                contrastText: 'white',
            }
        },
    });
    const [messageOpen, setmessageOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    let history = useHistory();


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setmessageOpen(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("Authentication Successful");
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Box sx={{
                    marginTop: '30%',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    borderRadius: '20px',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Typography component="h1" variant="h4" style={{ fontWeight: 'bold', marginBottom: '30px', paddingTop: "8%", textAlign: 'left', width: '100%'}}>
                        Login.
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Snackbar open={messageOpen} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                                {message}
                            </Alert>
                        </Snackbar>
                        <Grid container>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default LoginPage;