import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {IStore} from '../store';

// Define a type for the slice state
interface IMessagesState {
    conversation: IConversationItem[]
}
interface IConversationItem {
    text: string,
    isMine: boolean
}

// Define the initial state using that type
const initialState = {
    conversation: [
        {text:"Hello",isMine: false},
        {text:"Is Bunny there?",isMine: false},
        {text:"He’s not here",isMine: true},
        {text:"Are you sure?",isMine: false},
        {text:"He’s not here dude.",isMine: true},
    ]
}

export const MessagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setStoreMessages: (state, action: PayloadAction<any>) => ({
            ...state,
            ...action.payload
        }),
    },
})

export const {setStoreMessages} = MessagesSlice.actions
export const messages = (state: IStore) => state.messages
export default MessagesSlice.reducer

