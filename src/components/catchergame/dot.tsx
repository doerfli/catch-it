import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCircle, faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
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

    let icon = faCircle;
    let fontSize = '0.8rem';
    let mt = '0rem';
    if (props.isTarget) {
        icon = faXmark;
        fontSize = '1.2rem';
        mt = '0.3rem';
    }

    if (props.isMissed) {
        color = 'error';
    } else if (props.isHit) {
        color = 'success';
    } else if (props.isTarget) {
        color = 'warning';
    } else if (props.isAlight) {
        color = 'info';
    } 


    return (<Box sx={{ p: 0.1, display: 'inline', mt }}>
        <SvgIcon sx={{ fontSize }} color={color as SvgIconProps['color']} >
            <FontAwesomeIcon icon={icon} />
        </SvgIcon>
    </Box>);
}
