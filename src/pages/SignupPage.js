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
import MuiAlert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom';
import './styles/SignupPage.css'

function SignupPage() {
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
    const defaultPosition = {
        lat: 27.9878,
        lng: 86.9250
      };
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
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        setMessage("Authentication Successful");
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="header" maxWidth="xl" style={{padding: "2%",marginBottom: "1%", color: "white"}}>
                <Typography component="h1" variant="h4" style={{ fontWeight: 'bold', textAlign: 'left', width: '100%'}}>
                    Teleport.
                    <Typography component="h1" variant="h6" fontSize="50%" >
                    Contributing towards a carbon-free transit 
                    </Typography>
                </Typography>
            </Container>
            <Container component="main" maxWidth="xs">
                <Box sx={{
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    borderRadius: '20px',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: "white"
                }}>
                    <Typography component="h1" variant="h4" style={{ fontWeight: 'bold', marginBottom: '20px', paddingTop: "4%", textAlign: 'left', width: '100%' }}>
                        Signup.
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Snackbar open={messageOpen} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                                {message}
                            </Alert>
                        </Snackbar>
                        <Grid container>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignupPage;