
import { Metadata } from 'next';
import GoToTopButtonContainer from './components/GoToTopButtonContainer';
import Header from './components/Header';
import Sidebar, { SidebarContextProvider } from './components/Sidebar';
import './globals.css';
import MyChakraProvider from './helpers/MyChakraProvider';
import { inria } from './helpers/fonts';

export const metadata: Metadata = {
    title: 'Abdelkarim - Software developer',
    description: 'A simple descriptive portfolio website for ABDELKARIM BETTAYEB.'
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
            <body id='app' className={'h-screen ' + inria.className}>
                <SidebarContextProvider>
                    <MyChakraProvider>
                        <GoToTopButtonContainer id='scrollContainer' className='h-screen overflow-y-auto overflow-x-hidden'>
                            <Header />

                            <Sidebar />

                            <main className='m-10'>
                                {children}
                            </main>

                            {/* <Footer /> */}
                        </GoToTopButtonContainer>
                    </MyChakraProvider>
                </SidebarContextProvider>
            </body>
        </html >
    );
}
