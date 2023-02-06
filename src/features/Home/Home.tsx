import React from 'react';
import Cart from "./Cart/Cart";
import Devices from "./Devices/Devices";
import DevicesItems from "./DeviceItems/DevicesItems";
import {Container} from "@mui/material";

const Home = () => {
    return (
        <Container maxWidth='lg' sx={{display: 'flex', justifyContent: 'space-between', maxHeight: '100vh', overflow: 'hidden'} }>
            <Cart/>
            <Devices/>
            <DevicesItems/>
        </Container>
    );
};

export default Home;