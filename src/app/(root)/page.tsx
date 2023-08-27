'use client'

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, SvgIcon } from '@mui/material';

export default function App() {
  return (<>
      <Button variant="contained">Hello world</Button>
      <br />
      <SvgIcon sx={{ fontSize: '3rem' }}>
        <FontAwesomeIcon icon={faCoffee} />
      </SvgIcon>
  </>);
}
