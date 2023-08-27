import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, SvgIcon } from "@mui/material";
import { SvgIconProps } from '@mui/material/SvgIcon';

interface IDotProps {
    isActive: boolean;
    isTarget: boolean;
    isStopped: boolean;
}

export default function Dot(props: IDotProps) {
    let color = props.isActive ? 'info' : 'white';

    if (props.isTarget) {
        color = 'warning';
    }

    if (props.isStopped && props.isTarget && props.isActive) {
        color = 'success';
    } else if (props.isStopped && props.isActive) {
        color = 'error';
    }


    return (<Box sx={{ p: 0.1, display: 'inline' }}>
        <SvgIcon sx={{ fontSize: '0.8rem' }} color={color as SvgIconProps['color']}>
            <FontAwesomeIcon icon={faCircle} />
        </SvgIcon>
    </Box>);
}
