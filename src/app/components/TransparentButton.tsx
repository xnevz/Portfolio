import { Button, ButtonProps } from "@chakra-ui/react";

export function TransparentButton(props: ButtonProps) {
    return <Button
        {...props}
        className={'bg-white text-lg items-center flex bg-opacity-5 rounded-md h-max border-none text-white p-3 ' + props.className} />;
}
