import {configureStore} from "@reduxjs/toolkit"
import channelReducer from '../redux/channel/channel'


export const store = configureStore ({
    reducer: {
        channel: channelReducer
    }
})