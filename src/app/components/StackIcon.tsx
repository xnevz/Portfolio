import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaFigma } from "react-icons/fa";
import { RiNodejsLine, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiCsharp, SiPhp, SiRefine } from "react-icons/si";
import { TbBrandMysql, TbBrandCpp } from "react-icons/tb";
import { gold } from "../helpers/constants";
import { Tooltip } from "@chakra-ui/react";


const names = {
    react: 'ReactJs',
    mysql: 'MySQL',
    nodejs: 'NodeJs',
    'c#': 'C#',
    'c++': 'C++',
    php: 'PHP',
    postgresql: 'PostgreSQL',
    refine: 'Refine',
    figma: 'Figma',
    nextjs: 'NextJs',
    tailwind: 'TailwindCSS'
};

export function StackIcon({ name }: { name: string; }) {
    let Component = FaReact;
    switch (name) {
        case 'react':
            Component = FaReact;
            break;
        case 'mysql':
            Component = TbBrandMysql;
            break;
        case 'nodejs':
            Component = RiNodejsLine;
            break;
        case 'c#':
            Component = SiCsharp;
            break;
        case 'c++':
            Component = TbBrandCpp;
            break;
        case 'php':
            Component = SiPhp;
            break;
        case 'postgresql':
            Component = BiLogoPostgresql;
            break;
        case 'refine':
            Component = SiRefine;
            break;
        case 'figma':
            Component = FaFigma;
            break;
        case 'nextjs':
            Component = RiNextjsFill;
            break;
        case 'tailwind':
            Component = RiTailwindCssFill;
            break;
    }

    return <Tooltip title={(names as any)[name]}>
        <Component size={25} color={gold} />
    </Tooltip>;
}
