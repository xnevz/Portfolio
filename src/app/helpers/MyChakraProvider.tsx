'use client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

const theme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bg: "#34353A linear-gradient(-45deg, #FFC86B55, #34353A 90%)",
                color: 'white'
            },
        }),
    },
 
});

export default function MyChakraProvider({ children }: PropsWithChildren) {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
}
