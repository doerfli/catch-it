import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface TransactionState {
    numberOfDots: number;
    activeDot: number;
    showActive: boolean;
    stopped: boolean;
}

const initialState: TransactionState = {
    numberOfDots: 100,
    activeDot: 0,
    showActive: true,
    stopped: false,
}

export const dotsSlice = createSlice({
    name: 'dots',
    initialState,
    reducers: {
        setNumberOfDots: (state, action: PayloadAction<number>) => {
            state.numberOfDots = action.payload;
        },
        advanceActiveDot: (state) => {
            state.activeDot = (state.activeDot + 1) % state.numberOfDots;
        },
        clearPositionActive: (state) => {
            state.activeDot = -1;
        },
        showActive: (state) => {
            state.showActive = true;
        },
        hideActive: (state) => {
            state.showActive = false;
        },
        stopped: (state) => {
            state.stopped = true;
        },
    },  
});

// Action creators are generated for each case reducer function
export const { 
    setNumberOfDots,
    advanceActiveDot,
    clearPositionActive,
    showActive,
    hideActive,
    stopped,
} = dotsSlice.actions;

export default dotsSlice.reducer;

