'use client';

import React, { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-scroll';

export default function ClientLink({ to, children }: PropsWithChildren<{ to: string; }>) {
    return (
        <Link to={to} spy containerId='scrollContainer' smooth>
            {children}
        </Link>
    );
}
