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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { Autocomplete } from '@mui/material';
import './styles/SignupPage.css'
import { LocationPicker } from '../components/LocationPicker';

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
    const [workPattern, setWorkPattern] = React.useState([]);
    let history = useHistory();
    const workPatternOptions = {'Monday':'mon', 'Tuesday':'tue', 'Wednesday':'wed', 'Thursday':'thu',  
    'Friday':'fri', 'Saturday':'sat', 'Sunday':'sun'}
    const [homeCoordinates, setHomeCoordinates] = React.useState("");
    const [officeCoordinates, setOfficeCoordinates] = React.useState("");

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setmessageOpen(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    function getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          return reader.result;
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
     }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const gender = data.get('gender');
        const profilePhoto = getBase64(data.get('profilePhoto'));
        const workShortPattern = [];
        for(var i=0;i<workPattern.length;i++){
            workShortPattern.push(workPatternOptions[workPattern[i]]);
        }
        console.log(workShortPattern);
        setMessage("Authentication Successful");
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="header" maxWidth="xl" style={{ padding: "2%", color: "white" }}>
                <Typography component="h1" variant="h4" style={{ fontWeight: 'bold', textAlign: 'left', width: '100%' }}>
                    Teleport.
                    <Typography fontSize="50%" >
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
                    <Typography component="h1" variant="h4" style={{ fontWeight: 'bold', marginBottom: '10px', paddingTop: "2%", textAlign: 'left', width: '100%' }}>
                        Signup.
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                        <Grid container spacing={1.5}>
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
                            <Grid item xs={12}>
                                <FormControl variant="outlined" required fullWidth>
                                    <InputLabel>Gender</InputLabel>
                                    <Select
                                        id="gender"
                                        name="gender"
                                        label="Gender"
                                        defaultValue={''}
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <LocationPicker setCoordinates={setHomeCoordinates}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete 
                                    multiple
                                    disablePortal
                                    options={Object.keys(workPatternOptions)}
                                    name="workPattern"
                                    onChange={(event, value)=>{
                                        setWorkPattern(value);
                                    }} 
                                    renderInput={(params) => 
                                    <TextField {...params}
                                        required 
                                        label="Work Pattern"
                                        variant="outlined"
                                        fullWidth
                                    />} 
                                /> 
                            </Grid>
                            <Grid item xs={12}>
                                    <input
                                        accept="image/*"
                                        id="profilePhoto"
                                        name="profilePhoto"
                                        type="file"
                                        required
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