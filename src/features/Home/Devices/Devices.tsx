import React, {useEffect, useState} from 'react';
import {Box, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {getDevices} from "./devices-reducer";
import {useAppDispatch} from "../../../app/hooks";
import {DevicesType} from "../../../app/api";

const Devices = () => {

    const [active, setActive] = useState('flanges')

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
            <List>
                <ListItem selected={active === 'flanges'} disablePadding onClick={() => {
                    setActive('flanges')
                    getDevicesHandler('flanges')
                }}>
                    <ListItemButton>
                        <ListItemText primary="Фланцы"/>
                    </ListItemButton>
                </ListItem>

                <ListItem selected={active === 'valves'} disablePadding onClick={() => {
                    setActive('valves')
                    getDevicesHandler('valves')
                }}>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Краны"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default Devices;