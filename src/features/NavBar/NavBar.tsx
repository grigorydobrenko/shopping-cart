import React from 'react';
import {AppBar, Box, Toolbar, Typography} from "@mui/material";

const NavBar = () => {
    return (
        <Box>
        <AppBar  position="static">
            <Toolbar sx={{ width: '1100px', m: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div"
                >
                    Cart
                </Typography>
                <Typography variant="h6" component="div"
                >
                    Total: 0
                </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    );
};

export default NavBar;

