
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineColorsTuple, MantineProvider, createTheme } from '@mantine/core';
import { Metadata } from 'next';
import GoToTopButtonContainer from './components/GoToTopButtonContainer';
import Header from './components/Header';
import Sidebar, { SidebarContextProvider } from './components/Sidebar';
import './globals.css';
import { inria } from './helpers/fonts';

export const metadata: Metadata = {
    title: 'Abdelkarim - Software developer',
    description: 'A simple descriptive portfolio website for ABDELKARIM BETTAYEB.'
};

const myColor: MantineColorsTuple = [
    '#fff6e1',
    '#ffedcc',
    '#ffda9b',
    '#ffc664',
    '#ffb438',
    '#ffa91b',
    '#ffa409',
    '#e38f00',
    '#ca7e00',
    '#b06c00'
];

const theme = createTheme({
    primaryColor: 'myColor',
    colors: {
        myColor
    },
    defaultGradient: {
        from: myColor[4],
        to: myColor[3],
        deg: 45
    },
    components: {
        TextInput: {
            classNames: {
                error: 'text-red-400 font-bold'
            }
        }
    }
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
            <head>
                <ColorSchemeScript defaultColorScheme='dark' />
            </head>
            <body id='app' className={'h-screen ' + inria.className}>
                <SidebarContextProvider>
                    <MantineProvider defaultColorScheme='dark' theme={theme}>
                        <GoToTopButtonContainer id='scrollContainer' className='h-screen overflow-y-auto overflow-x-hidden'>
                            <Header />

                            <Sidebar />

                            <main className='m-5 sm:m-10'>
                                {children}
                            </main>

                            {/* <Footer /> */}
                        </GoToTopButtonContainer>
                    </MantineProvider>
                </SidebarContextProvider>
            </body>
        </html >
    );
}
