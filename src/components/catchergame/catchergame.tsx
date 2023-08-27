import { advanceActiveDot, reset, start, stop } from "@/redux/slices/dots";
import { RootState } from "@/redux/store";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "./actions";
import DotLine from "./dotline";

export default function CatcherGame() {
    const dispatch = useDispatch();
    const timeout = 70;
    const [ intervalObj, setIntervalObj ] = useState<NodeJS.Timeout | null>(null);
    const started = useSelector((state: RootState) => state.dots.started);
    const stopped = useSelector((state: RootState) => state.dots.stopped);
    
    // call advanceActiveDot every 300 ms
    useEffect(() => {
        if (started && !stopped) {
            const interval = setInterval(() => {
                if (! stopped) {
                    dispatch(advanceActiveDot());
                }
            }, timeout);
            setIntervalObj(interval);
            return () => clearInterval(interval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- only run once on page load
    }, [started, stopped]);

    // stop the interval when the component unmounts
    

    return (<>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <DotLine />
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
                        clearInterval(intervalObj)
                    }
                }} 
                onReset={() => {
                    dispatch(reset());
                }}
                />
        </Box>
    </>);
}