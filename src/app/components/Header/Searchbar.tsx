'use client';
import { inria } from '@/app/helpers/fonts';
import React from 'react';
import { useSidebarContext } from '../Sidebar';
import { FaSearch } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { Button, TextInput } from '@mantine/core';

export default function Searchbar({ responsive }: { responsive?: boolean; }) {
    const { setContext } = useSidebarContext();

    function onMenuButtonClick() {
        setContext({
            open: true
        });
    }

    return (
        <div className='ms-auto'>
            <TextInput size='md'

                leftSection={<FaSearch color='white' cursor='pointer' />}
                placeholder='Search'
                classNames={{
                    input: 'bg-white bg-opacity-5 placeholder:text-white placeholder:opacity-50',
                }}
                className={(responsive ?? true ? 'hidden sm:flex' : 'flex') + ' ' + inria.className}>
            </TextInput>

            <Button
                variant='subtle'
                className={(responsive ?? true ? 'sm:hidden' : 'hidden') + ' p-0 text-white'}>
                <MdMenu className='' size={30} onClick={onMenuButtonClick} />
            </Button>
        </div>
    );
}
