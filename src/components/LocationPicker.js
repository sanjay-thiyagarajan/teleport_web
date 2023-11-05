import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import { fetchCoordinates } from "../utils/geoAPI";

export const LocationPicker = (props) => {
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState(null);

    const getAddress = () => {
        setCoordinates(null);
        if(address.trim() !== ''){
            fetchCoordinates(address).then((resp)=>{
                if(resp.error === undefined){
                    setCoordinates(`${resp.lat},${resp.lon}`);
                    props.setCoordinates(`${resp.lat},${resp.lon}`);
                }
            })
        }
    }

    return (
        <div>
            <TextField
                autoComplete="given-address"
                name="address"
                required
                fullWidth
                id="address"
                label="Address"
                onChange={(e)=>{
                    setAddress(e.target.value)
                }}
                onBlur={()=>{
                    getAddress();
                }}
                autoFocus
            />
            <Typography style={{padding: '1rem', color: coordinates ? 'green' : 'red' }}>
                {
                    coordinates ? `✔ ${coordinates}` :
                    'Oops! We cannot find the address'
                }
            </Typography>
        </div>
    )
}