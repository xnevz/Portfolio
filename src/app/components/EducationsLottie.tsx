'use client';
import Lottie, { LottieComponentProps } from 'lottie-react';
const interactivity: any = {
    mode: "scroll",
    actions: [
        {
            visibility: [0, 0.2],
            type: "stop",
            frames: [0],
        },
        {
            visibility: [0.2, 0.45],
            type: "seek",
            frames: [0, 45],
        },
        {
            visibility: [0.45, 1.0],
            type: "loop",
            frames: [45, 60],
        },
    ],
};

export function ClientLottie(props: LottieComponentProps) {

    return <Lottie {...props} interactivity={{
        mode: "scroll",
        
        actions: [
            {
                visibility: [0, 0.2],
                type: "stop",
                frames: [0],
            },
            {
                visibility: [0.2, 0.45],
                type: "seek",
                frames: [0, 45],
            },
            {
                visibility: [0.45, 1.0],
                type: "loop",
                frames: [45, 60],
            },
        ],
    }} />;
}