import { Button } from "@mui/material"


interface StopperProps {
    onStop: () => void;
}

export default function Stopper(props: StopperProps) {
    return (<>
        <Button variant="contained" onClick={props.onStop}>Stop</Button>
    </>);
}