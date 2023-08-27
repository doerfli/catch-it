import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface TransactionState {
    numberOfDots: number;
}

const initialState: TransactionState = {
    numberOfDots: 100,
}

export const dotsSlice = createSlice({
    name: 'dots',
    initialState,
    reducers: {
        setNumberOfDots: (state, action: PayloadAction<number>) => {
            state.numberOfDots = action.payload;
        }
    },  
});

// Action creators are generated for each case reducer function
export const { 
    setNumberOfDots
} = dotsSlice.actions;

export default dotsSlice.reducer;

