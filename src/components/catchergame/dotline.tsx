import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import Dot from "./dot";
import { useEffect } from "react";
import { advanceActiveDot } from "@/redux/slices/dots";
import { Box } from "@mui/material";

export default function DotLine() {
    const numberOfDots = useSelector((state: RootState) => state.dots.numberOfDots);
    const activeDot = useSelector((state: RootState) => state.dots.activeDot);
    const dispatch = useDispatch();

    
    
    return (<Box>
        {[...Array(numberOfDots)].map((e, i: number) => {
            const isActive = activeDot === i;
            return (<Dot key={i} isActive={isActive} />);
        })}
    </Box>);
}