'use client';

import React, { createContext, useContext, useState } from 'react';
import Searchbar from './Header/Searchbar';
import { MdClose } from 'react-icons/md';
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input } from '@chakra-ui/react';

export default function Sidebar() {
    const { context: { open }, setContext } = useSidebarContext();

    function closeSidebar() {
        setContext({ open: false });
    }
    /**<Drawer
                placement='right'
                isOpen={open}
                onClose={() => setContext({ open: false })}
            >
                
            </Drawer> */
    return (
        <Drawer
            placement='right'
            isOpen={open}
            onClose={closeSidebar}
        >
            <DrawerOverlay />
            <DrawerContent className='bg-dark'>
                <DrawerCloseButton />
                <DrawerHeader>Navigate</DrawerHeader>

                <DrawerBody>
                    <Searchbar responsive={false} />

                    <ul className='flex flex-col p-5 overflow-clip text-lg gap-5 items-center justify-center grow [&_a]:text-white [&_a]:no-underline'>
                        <li className=''><a onClick={closeSidebar} href="/#about">About</a></li>
                        <li><a onClick={closeSidebar} href="/#education">Education</a></li>
                        <li><a onClick={closeSidebar} href="/#skills">Skills</a></li>
                        <li><a onClick={closeSidebar} href="/#projects">Projects</a></li>
                        <li><a onClick={closeSidebar} href="/#testimonials">Testimonials</a></li>
                        <li><a onClick={closeSidebar} className='text-nowrap' href="/#reach-me">Reach me</a></li>
                    </ul>
                </DrawerBody>

                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export function SidebarContextProvider({ children }: React.PropsWithChildren) {
    const [context, setContext] = useState<SidebarContextType>({
        open: false
    });

    return <SidebarContext.Provider value={{
        context,
        setContext(p) {
            setContext(prev => ({ ...prev, ...p }));
        }
    }}>
        {children}
    </SidebarContext.Provider>;
}

interface SidebarContextType {
    open: boolean;
}

const SidebarContext = createContext<{
    context: SidebarContextType,
    setContext: (partial: Partial<SidebarContextType>) => void;
}>({
    context: {
        open: false
    },
    setContext(p) { }
});

export const useSidebarContext = () => useContext(SidebarContext);
