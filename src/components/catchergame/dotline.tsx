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
    
    return (<Box>
        {[...Array(numberOfDots)].map((e, i: number) => {
            const isActive = activeDot === i;
            const isTarget = target === i;
            return (<Dot key={i} isActive={isActive} isTarget={isTarget} isStopped={stopped} />);
        })}
    </Box>);
}