import React, {useEffect} from 'react';
import {Box, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {getDevices} from "./devices-reducer";
import {useAppDispatch} from "../../../app/hooks";
import {DevicesType} from "../../../app/api";

const Devices = () => {

    const dispatch = useAppDispatch()

    const getDevicesHandler = (devices: DevicesType) => {
        dispatch(getDevices(devices))
    }

    useEffect(() => {
        const initDevices = 'flanges'
        dispatch(getDevices(initDevices))
    }, [])


    return (
        <Box sx={{width: '15%', bgcolor: 'background.paper', overflow: 'auto'}}>

            <ListItem disablePadding onClick={() => getDevicesHandler('flanges')}>
                <ListItemButton>
                    <ListItemText primary="Flanges"/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding onClick={() => getDevicesHandler('valves')}>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Valves"/>
                </ListItemButton>
            </ListItem>
        </Box>
    );
};

export default Devices;