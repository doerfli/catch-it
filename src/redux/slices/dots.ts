import { Difficulty } from '@/types/difficulty';
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
    difficulty: Difficulty;
}

const initialState: TransactionState = {
    numberOfDots: 100,
    activeDot: -1,
    minTimeout: 70,
    maxTimeout: 120,
    hideAfter: 60,
    started: false,
    stopped: false,
    difficulty: Difficulty.EASY,
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
        setDifficulty: (state, action: PayloadAction<Difficulty>) => {
            state.difficulty = action.payload;
            switch (action.payload) {
                case Difficulty.EASY:
                    state.minTimeout = 70;
                    state.maxTimeout = 120;
                    state.hideAfter = 60;
                    break;
                case Difficulty.MEDIUM:
                    state.minTimeout = 50;
                    state.maxTimeout = 100;
                    state.hideAfter = 50;
                    break;
                case Difficulty.HARD:
                    state.minTimeout = 30;
                    state.maxTimeout = 80;
                    state.hideAfter = 40;
                    break;
            }
        }
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
    setDifficulty,
} = dotsSlice.actions;

export default dotsSlice.reducer;

