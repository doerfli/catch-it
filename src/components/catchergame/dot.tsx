import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SvgIcon } from "@mui/material";

export default function Dot() {
    return (<SvgIcon sx={{ fontSize: '0.8rem'}}>
        <FontAwesomeIcon icon={faCircle} />
    </SvgIcon>);
}
