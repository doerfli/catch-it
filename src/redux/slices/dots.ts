import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface TransactionState {
    numberOfDots: number;
    activeDot: number;
    showActive: boolean;
    started: boolean;
    stopped: boolean;
}

const initialState: TransactionState = {
    numberOfDots: 100,
    activeDot: -1,
    showActive: true,
    started: false,
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
        start: (state) => {
            state.started = true;
        },
        stop: (state) => {
            state.stopped = true;
        },
        reset: (state) => {
            state.started = false;
            state.stopped = false;
            state.activeDot = -1;
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
    start,
    stop,
    reset,
} = dotsSlice.actions;

export default dotsSlice.reducer;

