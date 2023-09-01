import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface TransactionState {
    numberOfDots: number;
    activeDot: number;
    minTimeout: number;
    maxTimeout: number;
    hideAfter: number;
    started: boolean;
    stopped: boolean;
}

const initialState: TransactionState = {
    numberOfDots: 100,
    activeDot: -1,
    minTimeout: 70,
    maxTimeout: 120,
    hideAfter: 60,
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
            if (state.activeDot < state.numberOfDots - 1) {
                state.activeDot = (state.activeDot + 1) % state.numberOfDots;
            } else {
                state.stopped = true;
            }
        },
        clearPositionActive: (state) => {
            state.activeDot = -1;
        },
        start: (state) => {
            state.started = true;
        },
        stop: (state) => {
            state.stopped = true;
        },
        hideAfter: (state, action: PayloadAction<number>) => {
            state.hideAfter = action.payload;
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
    start,
    stop,
    reset,
    hideAfter,
} = dotsSlice.actions;

export default dotsSlice.reducer;

