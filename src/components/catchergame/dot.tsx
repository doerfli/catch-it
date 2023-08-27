import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, SvgIcon } from "@mui/material";
import { SvgIconProps } from '@mui/material/SvgIcon';

interface IDotProps {
    isAlight: boolean; // blue
    isTarget: boolean; // orange
    isHit: boolean; // green
    isMissed: boolean; // red
}

export default function Dot(props: IDotProps) {
    let color = 'white';
    if (props.isMissed) {
        color = 'error';
    } else if (props.isHit) {
        color = 'success';
    } else if (props.isTarget) {
        color = 'warning';
    } else if (props.isAlight) {
        color = 'info';
    } 


    return (<Box sx={{ p: 0.1, display: 'inline' }}>
        <SvgIcon sx={{ fontSize: '0.8rem' }} color={color as SvgIconProps['color']}>
            <FontAwesomeIcon icon={faCircle} />
        </SvgIcon>
    </Box>);
}
