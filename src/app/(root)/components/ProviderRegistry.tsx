'use client';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from '@/config/theme';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export default function ProviderRegistry({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={darkTheme}>
            <Provider store={store}>
                <CssBaseline enableColorScheme />
                <body>
                    {children}
                </body>
            </Provider>
        </ThemeProvider>
    );
}