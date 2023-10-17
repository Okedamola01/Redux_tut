import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id: '0', name: 'Neville Longbottom'},
    {id: '1', name: 'Ronald Weasly'},
    {id: '2', name: 'Hermione Granger'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    
    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer