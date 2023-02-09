import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {devicesAPI, DevicesType} from "../../../app/api";


export const getDevices = createAsyncThunk('devices/getDevices', async (devices: DevicesType, thunkAPI) => {
    try {
        const res = await devicesAPI.getDevices(devices)
        if (res) {
            // thunkAPI.dispatch(setAppStatusAC({status: 'succeeded'}))
            return {devices: res}
        } else {
            return thunkAPI.rejectWithValue('error')
            // return handleAsyncServerAppError(res.data, thunkAPI)
        }
    } catch (error) {
        return thunkAPI.rejectWithValue('error')
        // return handleAsyncServerNetworkError(error as AxiosError, thunkAPI)
    }
})


const slice = createSlice({
    name: 'devices',
    initialState: [],
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getDevices.fulfilled, (state,action) => {
            return action.payload.devices
        })
    }
})

export const devicesReducer = slice.reducer
