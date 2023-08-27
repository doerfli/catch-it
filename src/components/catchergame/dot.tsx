import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SvgIcon } from "@mui/material";
import { SvgIconProps } from '@mui/material/SvgIcon';

interface IDotProps {
    isActive: boolean;
}

export default function Dot(props: IDotProps) {
    const color = props.isActive ? 'primary' : 'white';

    return (
        <SvgIcon sx={{ fontSize: '0.8rem' }} color={color as SvgIconProps['color']}>
            <FontAwesomeIcon icon={faCircle} />
        </SvgIcon>
    );
}
