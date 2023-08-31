import { faBackwardFast, faCircleStop, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, SvgIcon } from "@mui/material";

interface ActionsProps {
    started: boolean;
    stopped: boolean;
    onStart: () => void;
    onStop: () => void;
    onReset: () => void;
}

export default function Actions(props: ActionsProps) {
    return <>
        {! props.started && 
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
        {props.started && ! props.stopped && 
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
        {props.stopped && 
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
