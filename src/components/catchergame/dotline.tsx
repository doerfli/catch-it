import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import Dot from "./dot";
import { useEffect } from "react";
import { advanceActiveDot } from "@/redux/slices/dots";
import { Box } from "@mui/material";

export default function DotLine() {
    const numberOfDots = useSelector((state: RootState) => state.dots.numberOfDots);
    const activeDot = useSelector((state: RootState) => state.dots.activeDot);
    const stopped = useSelector((state: RootState) => state.dots.stopped);
    const target = 85;
    const hideAfter = useSelector((state: RootState) => state.dots.hideAfter);
    
    return (<Box>
        {[...Array(numberOfDots)].map((e, i: number) => {
            const isActiveDot = i === activeDot;
            const isAlight = isActiveDot && i <= hideAfter;
            const isTarget = i === target;
            const isHit = stopped && isActiveDot && isTarget;
            const isMissed = stopped && isActiveDot && !isTarget;
            
            return (<Dot 
                key={i} 
                isAlight={isAlight}
                isTarget={isTarget}
                isHit={isHit}
                isMissed={isMissed}
                />);
        })}
    </Box>);
}