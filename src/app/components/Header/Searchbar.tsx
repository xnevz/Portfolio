'use client';
import { inria } from '@/app/helpers/fonts';
import React from 'react';
import { useSidebarContext } from '../Sidebar';
import { FaSearch } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { Button, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';

export default function Searchbar({ responsive }: { responsive?: boolean; }) {
    const { setContext } = useSidebarContext();

    function onMenuButtonClick() {
        setContext({
            open: true
        });
    }

    return (
        <div className='ms-auto'>
            <InputGroup size='md' className={(responsive ?? true ? 'hidden sm:flex' : 'flex') + ' bg-white bg-opacity-10 [&_input]:bg-transparent [&_input]:text-white [&_input]:placeholder:text-white [&_input]:placeholder:text-opacity-50 border-none rounded-md [&_input:focus]:w-80 ' + inria.className}>
                <InputLeftAddon bg='transparent' border='none'>
                    <FaSearch color='white' cursor='pointer' />
                </InputLeftAddon>
                <Input border='none'

                    placeholder='Search'
                />
            </InputGroup>

            <Button 
            variant='ghost'
            className={(responsive ?? true ? 'sm:hidden' : 'hidden') + ' p-0 text-white'}>
                <MdMenu className='' size={30} onClick={onMenuButtonClick} />
            </Button>
        </div>
    );
}
