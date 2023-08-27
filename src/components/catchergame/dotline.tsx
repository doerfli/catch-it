import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Dot from "./dot";

export default function DotLine() {
    const numberOfDots = useSelector((state: RootState) => state.dots.numberOfDots);
    
    return (<>
        {[...Array(numberOfDots)].map((e, i) => {
            return (<Dot key={i} />);
        })}
    </>);
}