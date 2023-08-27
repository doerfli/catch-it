import { Button } from "@mui/material";

interface ActionsProps {
    started: boolean;
    stopped: boolean;
    onStart: () => void;
    onStop: () => void;
    onReset: () => void;
}

export default function Actions(props: ActionsProps) {
    return <>
        {! props.started && <Button variant="contained" onClick={props.onStart}>Start</Button>}
        {props.started && ! props.stopped && <Button variant="contained" onClick={props.onStop}>Stop</Button>}
        {props.stopped && <Button variant="contained" onClick={props.onReset}>Reset</Button>}
    </>;
}
