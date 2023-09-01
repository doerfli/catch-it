import { setDifficulty } from "@/redux/slices/dots";
import { RootState } from "@/redux/store";
import { Difficulty } from "@/types/difficulty";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, SvgIcon } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function Difficulties() {
    const difficulty = useSelector((state: RootState) => state.dots.difficulty);
    const dispatch = useDispatch();

    return <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
        <Button 
            variant="contained" 
            fullWidth
            sx={{ p: 4}}
            color={ difficulty === Difficulty.EASY ? 'secondary' : 'info' }
            onClick={() => dispatch(setDifficulty(Difficulty.EASY))}
            >
            <SvgIcon fontSize="large">
                <FontAwesomeIcon icon={ faChevronRight } />
            </SvgIcon>
        </Button>
        <Button 
            variant="contained" 
            fullWidth
            sx={{ p: 4}}
            color={ difficulty === Difficulty.MEDIUM ? 'secondary' : 'info' }
            onClick={() => dispatch(setDifficulty(Difficulty.MEDIUM))}
            >
                <Box sx={{ display: 'flex'}}>
                    <SvgIcon fontSize="large">
                        <FontAwesomeIcon icon={ faChevronRight } />
                    </SvgIcon>
                    <SvgIcon fontSize="large" sx={{ ml: -2 }}>
                        <FontAwesomeIcon icon={ faChevronRight } />
                    </SvgIcon>
                </Box>
        </Button>
        <Button 
            variant="contained" 
            fullWidth
            sx={{ p: 4}}
            color={ difficulty === Difficulty.HARD ? 'secondary' : 'info' }
            onClick={() => dispatch(setDifficulty(Difficulty.HARD))}
            >
                <Box sx={{ display: 'flex'}}>
                    <SvgIcon fontSize="large">
                        <FontAwesomeIcon icon={ faChevronRight } />
                    </SvgIcon>
                    <SvgIcon fontSize="large" sx={{ ml: -2 }}>
                        <FontAwesomeIcon icon={ faChevronRight } />
                    </SvgIcon>
                    <SvgIcon fontSize="large" sx={{ ml: -2 }}>
                        <FontAwesomeIcon icon={ faChevronRight } />
                    </SvgIcon>
                </Box>
        </Button>
    </Box>;
}