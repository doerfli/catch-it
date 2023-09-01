import { advanceActiveDot, reset, start, stop } from "@/redux/slices/dots";
import { RootState } from "@/redux/store";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "./actions";
import DotLine from "./dotline";
import Difficulties from "./difficulties";

export default function CatcherGame() {
    const dispatch = useDispatch();
    const [ intervalObj, setIntervalObj ] = useState<NodeJS.Timeout | null>(null);
    const started = useSelector((state: RootState) => state.dots.started);
    const stopped = useSelector((state: RootState) => state.dots.stopped);
    const minTimeout = useSelector((state: RootState) => state.dots.minTimeout);
    const maxTimeout = useSelector((state: RootState) => state.dots.maxTimeout);
    
    function timeout() {
        const diff = maxTimeout - minTimeout;
        const speed = Math.floor((Math.random() * diff) + minTimeout);
        console.log(`timeout: ${speed}`);
        return speed;
    }

    // call advanceActiveDot every 300 ms
    useEffect(() => {
        if (started && !stopped) {
            const interval = setInterval(() => {
                if (! stopped) {
                    dispatch(advanceActiveDot());
                }
            }, timeout());
            setIntervalObj(interval);
            return () => clearInterval(interval);
        } else if ( started && stopped && intervalObj !== null) {
            clearInterval(intervalObj);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- only run once on page load
    }, [started, stopped]);    

    return (<>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mx: 'auto'}}>
                <DotLine />
            </Box>
            <Box sx={{ p: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Actions 
                    started={started} 
                    stopped={stopped} 
                    onStart={() => {
                        dispatch(start());
                        dispatch(advanceActiveDot());
                    }}
                    onStop={() => {
                        if (intervalObj !== null) {
                            dispatch(stop());
                            clearInterval(intervalObj);
                        }
                    }} 
                    onReset={() => {
                        dispatch(reset());
                    }}
                    />
                <Difficulties />
            </Box>
        </Box>
    </>);
}