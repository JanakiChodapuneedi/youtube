import { createSlice } from "@reduxjs/toolkit";
import LIVE_CHAT_COUNT from "../Components/LiveChat";
const chatSlice= createSlice({
    name : 'chat',
    initialState : {
        messages: []
    },
    reducers :{
        addMessage : (state,action)=>{
            state.messages.splice(1,LIVE_CHAT_COUNT);
            state.messages.unshift(action.payload)
        }
    }
});
export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;