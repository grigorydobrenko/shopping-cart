import React from 'react';
import {Box, ListItem, ListItemButton, ListItemText} from "@mui/material";

const Devices = () => {
    return (
        <Box sx={{ width: '20%', bgcolor: 'background.paper', overflow: 'auto'}}>

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary="Trash" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                </ListItemButton>
            </ListItem>
        </Box>
    );
};

export default Devices;