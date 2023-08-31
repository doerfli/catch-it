'use client'

import CatcherGame from '@/components/catchergame/catchergame';
import { Typography } from '@mui/material';

export default function App() {
    return (<>
        <Typography variant="h1" sx={{ my: 8, textAlign: 'center' }}>Catch it</Typography>
        <CatcherGame />
    </>);
}
