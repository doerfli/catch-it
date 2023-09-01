'use client'

import CatcherGame from '@/components/catchergame/catchergame';
import { Typography } from '@mui/material';

export default function App() {
    return (<>
        <Typography variant="h1" sx={{ my: 8, textAlign: 'center' }}>Stop on 
            <Typography color="orange" variant="h1" component="span" sx={{ ml: 3, fontWeight: 'medium'}}>X</Typography>
        </Typography>
        <CatcherGame />
    </>);
}
