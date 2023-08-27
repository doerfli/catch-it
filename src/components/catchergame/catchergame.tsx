import { advanceActiveDot } from "@/redux/slices/dots";
import { useEffect, useState } from "react";
import DotLine from "./dotline";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import Stopper from "./stopper";

export default function CatcherGame() {
    const dispatch = useDispatch();
    const timeout = 50;
    const [ intervalObj, setIntervalObj ] = useState<NodeJS.Timeout | null>(null);
    
    // call advanceActiveDot every 300 ms
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(advanceActiveDot());
        }, timeout);
        setIntervalObj(interval);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps -- only run once on page load
    }, []);

    // stop the interval when the component unmounts
    

    return (<>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <DotLine />
            <Stopper onStop={() => {
                if (intervalObj !== null) {
                    clearInterval(intervalObj)
                }
            }}/>
        </Box>
    </>);
}