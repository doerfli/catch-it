import type { Metadata } from 'next';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import ProviderRegistry from './components/ProviderRegistry';

export const metadata: Metadata = {
    title: 'Catch-it',
    description: 'How good can you estimate time?',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </head>
            <ProviderRegistry>
                <Container maxWidth='xl' sx={{ p: 2 }}>
                    {children}
                </Container>
            </ProviderRegistry>
        </html>
    )
}
