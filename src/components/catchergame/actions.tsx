import { RootState } from "@/redux/store";
import { faBackwardFast, faCircleStop, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, SvgIcon } from "@mui/material";
import { useSelector } from "react-redux";

interface ActionsProps {
    onStart: () => void;
    onStop: () => void;
    onReset: () => void;
}

export default function Actions(props: ActionsProps) {
    const started = useSelector((state: RootState) => state.dots.started);
    const stopped = useSelector((state: RootState) => state.dots.stopped);
    
    return <>
        {! started && 
            <Button 
                variant="contained" 
                fullWidth
                sx={{ p: 4}}
                color="success"
                onClick={props.onStart} 
                >
                <SvgIcon fontSize="large">
                    <FontAwesomeIcon icon={ faPlay } />
                </SvgIcon>
            </Button>}
        {started && ! stopped && 
            <Button 
                variant="contained" 
                fullWidth
                sx={{ p: 4}}
                color="error"
                onClick={props.onStop}
                >
                <SvgIcon fontSize="large">
                    <FontAwesomeIcon icon={ faCircleStop } />
                </SvgIcon>
            </Button>}
        {stopped && 
            <Button 
                variant="contained" 
                fullWidth
                sx={{ p: 4}}
                color="info"
                onClick={props.onReset}
                >
                <SvgIcon fontSize="large">
                    <FontAwesomeIcon icon={ faBackwardFast } />
                </SvgIcon>
            </Button>}
    </>;
}
